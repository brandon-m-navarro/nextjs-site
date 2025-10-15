/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        // test: /\.svg$/i,
        // use: ["@svgr/webpack"],
        test: /\.(png|jp(e*)g|svg|gif)$/,
        type: "asset/resource",
      });
  
      return config;
    },
  
    experimental: {
      turbo: {
        rules: {
          '*.svg': {
            loaders: ['@svgr/webpack'],
            as: '*.js'
          }
        },
      }
    },
};

export default nextConfig;
