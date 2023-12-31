/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Prevent native module binaries from being loaded on macOS
    // See: https://github.com/paulmillr/chokidar/issues/1000
    config.externals.push("fsevents");
    return config;
  },
};

module.exports = nextConfig;
