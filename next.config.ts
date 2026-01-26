import type { NextConfig } from "next";
import { createMDX } from 'fumadocs-mdx/next';
const withMDX = createMDX();
const nextConfig: NextConfig = {
  reactStrictMode: true,
   experimental: {
    typedEnv: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ferf1mheo22r9ira.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**'
      }
    ],
  },
};


export default withMDX(nextConfig);
