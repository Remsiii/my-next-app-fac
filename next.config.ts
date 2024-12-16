/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Export statische Dateien
  distDir: 'dist', // Ausgabeordner
  trailingSlash: true, // Füge trailing slashes hinzu (wichtig für GitHub Pages)
};

module.exports = nextConfig;
