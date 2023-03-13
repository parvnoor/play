/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DEV_BASEURL: "{add dev base url of apis here}",
    PROD_BASEURL: "{add prod base url of apis here}",
    STAGING_BASEURL: "{add staging base url for apis here}"
  }
}

module.exports = nextConfig
