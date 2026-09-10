import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Nodemailer resolves transports and encodings at runtime, so it is loaded
  // from node_modules instead of being traced into the bundle.
  serverExternalPackages: ["nodemailer"],

  // The quote mail embeds the logo as an inline attachment, so the file has to
  // ship with the server bundle rather than only being served statically.
  outputFileTracingIncludes: {
    "/contact": ["./public/logo-email.png"],
  },
};

export default nextConfig;
