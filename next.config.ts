import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
	images: { unoptimized: true },
	basePath: '/myangya',
	compress: true,
};

export default nextConfig;
