import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  // Dev only: production routes /api via vercel.json to the Python function.
  async rewrites() {
    return isDev
      ? [
          {
            source: "/api/:path*",
            destination: "http://127.0.0.1:8000/api/:path*",
          },
        ]
      : [];
  },
};

export default nextConfig;
