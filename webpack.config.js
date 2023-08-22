import path from 'path';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
let test = path.resolve('src');

export default {
    mode: 'development',
    entry: './src/index.js',
	output: {
		filename: '[name].[contenthash].js',
        path: path.resolve('dist')
	},
	plugins: [
        new MiniCssExtractPlugin({
            filename: 'build.[contenthash].css'
        }),
        new CleanWebpackPlugin(),
		new HtmlWebpackPlugin()
    ],
    module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	}    
};


