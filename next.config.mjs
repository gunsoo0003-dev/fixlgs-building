/** @type {import('next').NextConfig} */
import {unpublishedLocaleRedirects} from './publication-config.mjs';

const nextConfig = {
  reactStrictMode: true,
  basePath: "/building",
  async redirects() {
    return unpublishedLocaleRedirects();
  },
};

export default nextConfig;
