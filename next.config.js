/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
   
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? "/akalustat.com/" : "",
}

module.exports = withPlugins([ [optimizedImages, {} ] ], nextConfig)
