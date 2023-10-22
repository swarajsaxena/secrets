/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_CLIENT_ID:
      '402397592714-bn0sirekfmfci1gmdhet32q804mh6uma.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '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',
    NEXTAUTH_SECRET: 'secrets_swaraj_saxena_240900',
  },
  images: {
    remotePatterns: [
      {
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
}

module.exports = nextConfig
