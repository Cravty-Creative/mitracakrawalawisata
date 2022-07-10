/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/webmail",
        destination: "https://ellaria.id.rapidplex.com:2096/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
