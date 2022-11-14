/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //photos에서 사용하는 외부URL정의
  images : {
    domains: ["via.placeholder.com"]
  }
}

module.exports = nextConfig
