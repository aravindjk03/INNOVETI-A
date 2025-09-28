// Utility function to handle asset paths for GitHub Pages deployment
export const getAssetPath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/INNOVETI-A' : '';
  return `${basePath}${path}`;
};

export default getAssetPath;