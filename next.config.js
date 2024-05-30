const webpack = require("webpack");

const sassOptions = {
	includePaths: ["./components", "./pages"],
	prependData: `
    @use "sass:math";
    @import "./styles/mediaqueries"; 
    @import "./styles/fonts";
  `,
};

const nextOptions = {
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	devIndicators: {
		buildActivity: false,
	},
	experimental: {
		scrollRestoration: true,
	},
	webpack: (config, ctx) => {
		config.module.rules.push({
			test: /\.(graphql|gql)$/,
			exclude: /node_modules/,
			loader: "graphql-tag/loader",
		});
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			exclude: /node_modules/,
			use: ["@svgr/webpack"],
		});
		config.plugins.push(
			new webpack.DefinePlugin({
				__DEV__: process.env.NODE_ENV === "development",
			})
		);
		return config;
	},
};

/**
 * @type {import('next').NextConfig}
 */
const config = { sassOptions, ...nextOptions };
module.exports = config;
