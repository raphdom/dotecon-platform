import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@dotecon/ui", "@dotecon/db"],
};

export default nextConfig;
