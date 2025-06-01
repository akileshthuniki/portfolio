/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './imageLoader.js'
  }
}

export default nextConfig
