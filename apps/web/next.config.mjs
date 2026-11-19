/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@hostel-os/types",
    "@hostel-os/validation",
    "@hostel-os/business-logic",
    "@hostel-os/permissions",
    "@hostel-os/api-client",
    "@hostel-os/ui",
  ],
};

export default nextConfig;
