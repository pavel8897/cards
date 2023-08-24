import path from 'path';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// let test = path.resolve('src');

export default {
    mode: 'development',
    entry: {
		data: './src/script/data.js',
		main: './src/index.js'	
	},
	output: {		
        path: path.resolve('dist'),
		filename: '[name].[contenthash].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html'
		}),
        new MiniCssExtractPlugin({
            filename: 'build.[contenthash].css'
        }),
        new CleanWebpackPlugin()		
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



