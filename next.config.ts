import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
  remotePatterns: [{ hostname: "uiverse.io" },],
  }
};

export default nextConfig;
