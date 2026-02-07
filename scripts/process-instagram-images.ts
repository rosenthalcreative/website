import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

interface ImageMetadata {
  filename: string;
  categories: string[];
  caption: string;
  date: string;
  tags: string[];
}

// Keywords for categorization
const categoryKeywords = {
  weddings: ['wedding', 'bride', 'groom', 'ceremony', 'reception', 'bridal', 'nuptials', 'matrimony'],
  events: ['event', 'activation', 'mall', 'corporate', 'party', 'celebration', 'launch', 'opening'],
  interior: ['interior', 'design', 'decor', 'styling', 'home', 'space', 'room', 'furniture'],
  'custom-builds': ['custom', 'build', 'workshop', 'construction', 'installation', 'fabrication', 'handmade', 'craft']
};

async function decompressJson(jsonXzPath: string): Promise<any> {
  try {
    const { stdout } = await execAsync(`xz -dc "${jsonXzPath}"`);
    return JSON.parse(stdout);
  } catch (error) {
    console.error(`Error decompressing ${jsonXzPath}:`, error);
    return null;
  }
}

function categorizeByCaption(caption: string): string[] {
  const categories: string[] = [];
  const lowerCaption = caption.toLowerCase();

  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(keyword => lowerCaption.includes(keyword))) {
      categories.push(category);
    }
  }

  // Default to events if no specific category found
  if (categories.length === 0) {
    categories.push('events');
  }

  return categories;
}

async function processInstagramImages() {
  const instagramDir = path.join(process.cwd(), 'instagram_download', 'rosenthal_creative');
  const publicImagesDir = path.join(process.cwd(), 'public', 'images');

  if (!fs.existsSync(instagramDir)) {
    console.error('Instagram download directory not found');
    return;
  }

  const files = fs.readdirSync(instagramDir);
  const imageFiles = files.filter(f => f.endsWith('.jpg'));
  const metadata: ImageMetadata[] = [];

  console.log(`Found ${imageFiles.length} images to process`);

  for (const imageFile of imageFiles) {
    const jsonXzFile = imageFile.replace('.jpg', '.json.xz');
    const jsonXzPath = path.join(instagramDir, jsonXzFile);

    let caption = '';
    let date = '';
    let tags: string[] = [];

    if (fs.existsSync(jsonXzPath)) {
      const jsonData = await decompressJson(jsonXzPath);
      if (jsonData) {
        caption = jsonData.node?.edge_media_to_caption?.edges?.[0]?.node?.text || '';
        date = jsonData.node?.taken_at_timestamp
          ? new Date(jsonData.node.taken_at_timestamp * 1000).toISOString()
          : '';
        tags = jsonData.node?.tags || [];
      }
    }

    // Extract date from filename if not in metadata
    if (!date) {
      const dateMatch = imageFile.match(/^(\d{4}-\d{2}-\d{2})/);
      if (dateMatch) {
        date = new Date(dateMatch[1]).toISOString();
      }
    }

    const categories = categorizeByCaption(caption);

    metadata.push({
      filename: imageFile,
      categories,
      caption,
      date,
      tags
    });

    // Copy image to categorized directories
    for (const category of categories) {
      const destDir = path.join(publicImagesDir, category);
      const destPath = path.join(destDir, imageFile);

      if (!fs.existsSync(destPath)) {
        fs.copyFileSync(path.join(instagramDir, imageFile), destPath);
        console.log(`Copied ${imageFile} to ${category}/`);
      }
    }
  }

  // Write metadata to JSON file
  const metadataPath = path.join(process.cwd(), 'data', 'images-metadata.json');
  fs.mkdirSync(path.dirname(metadataPath), { recursive: true });
  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));

  console.log(`\nProcessed ${metadata.length} images`);
  console.log(`Metadata saved to ${metadataPath}`);

  // Print category summary
  const categoryCounts: Record<string, number> = {};
  metadata.forEach(img => {
    img.categories.forEach(cat => {
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    });
  });

  console.log('\nCategory distribution:');
  Object.entries(categoryCounts).forEach(([cat, count]) => {
    console.log(`  ${cat}: ${count} images`);
  });
}

processInstagramImages().catch(console.error);
