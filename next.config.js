const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ["error"],
    },
  },
};

module.exports = nextConfig;
