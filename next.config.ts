import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Nodemailer resolves transports and encodings at runtime, so it is loaded
  // from node_modules instead of being traced into the bundle.
  serverExternalPackages: ["nodemailer"],
};

export default nextConfig;
