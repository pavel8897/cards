import path from 'path';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
let test = path.resolve('src');
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    mode: 'development',
    entry: './src/index.js',
    module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
    plugins: [
        new CopyPlugin({
			patterns: [
				{
					from: path.resolve('src/index.html'),
					to: path.resolve('dist')
				},
				
			],
		}),
        new MiniCssExtractPlugin({
            filename: 'build.css'
        }),
        new CleanWebpackPlugin()
    ],
    output: {
		filename: 'build.js',
        path: path.resolve('dist')
	}
};


