import withNextIntl from "next-intl/plugin";

const nextIntlConfig = withNextIntl();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.steamstatic.com"],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextIntlConfig(nextConfig);
