import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import GalleryPreview from '@/components/GalleryPreview';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <GalleryPreview />
      <Footer />
    </main>
  );
}
