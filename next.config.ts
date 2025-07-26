import type { NextConfig } from "next";

/**
 * Next.js configuration
 * - output: "export" enables static site export
 * - images.unoptimized: true allows image export without Next.js Image Optimization
 * - typescript.ignoreBuildErrors: uncomment to skip type-checking during builds (not recommended for production)
 */
const nextConfig: NextConfig = {
  output: "export", // Enables static HTML export (`next export`)
  images: {
    unoptimized: true, // Required for static export if using <Image>
  },
  typescript: {
    // Set to true only if you're okay ignoring TS build errors
    // ignoreBuildErrors: true,
  },
  eslint: {
    // Optional: Ignore ESLint build errors on Vercel
    // Useful if ESLint fails builds but you want to deploy anyway
    ignoreDuringBuilds: false, // Change to true to disable ESLint in build
  },
};

export default nextConfig;
