/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-US', 'ua',],
    defaultLocale: 'ua',
  },
}

module.exports = nextConfig
