import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';
import webpack from 'webpack';
import path from 'path';
import 'webpack-dev-server';

const devConfig: webpack.Configuration = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, './dist'),
		},
		hot: true,
		open: true,
		port: 3000,
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
};

export default merge(commonConfig, devConfig);
