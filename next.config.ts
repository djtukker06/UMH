import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder photography while the Science Park stills are not in /public/img yet.
    remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }],
  },
};

export default nextConfig;
