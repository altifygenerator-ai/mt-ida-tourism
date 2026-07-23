import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    cpus: 4,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mountidaarkansas.org" }],
        destination: "https://mountidaarkansas.org/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
