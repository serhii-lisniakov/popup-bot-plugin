const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, '#src'),
    dist: path.join(__dirname, 'dist'),
}
const PAGES_DIR = `${PATHS.src}/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))


module.exports = {
 context: path.resolve(__dirname, '#src'),
 mode: 'development', 
 entry: {
    main: './js/index.js',
 },
 devServer: {
     port: 3000
 },
 output: {
     filename: 'js/[name].js',
     path: path.resolve(__dirname, 'dist')
 },
 plugins: [
    ...PAGES.map(page => new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/${page}`,
        filename: `./${page.replace(/\.pug/,'.html')}`
    })),
 ],
 module: {
     rules: [
         { test: /\.js$/, 
           exclude: /node_modules/,
           loader: 'babel-loader' 
         },
         {
            test: /\.pug$/,
            use: 'pug-loader?pretty=true'
         },
     ]
 }
}
