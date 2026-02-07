/**
 * Get the correct path with base path prefix for GitHub Pages
 * @param path - The path to prepend base path to (should start with /)
 * @returns The full path including base path
 */
export function getAssetPath(path: string): string {
  const basePath = '/website';
  return `${basePath}${path}`;
}
