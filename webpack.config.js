const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = env => {
    return {
        context: path.join(__dirname, 'src'),
        entry: './index.js',
        mode: env.mode,
        watch: false,
        
        output: {
            filename: 'bundle.js',
            path: path.join(__dirname, 'dist'),
            publicPath: '/',
        },

        module: {
            rules: [
                {
                    test: /.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader",
                            options: { minimize: true }
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                      { loader: "style-loader" },
                      { loader: "css-loader" },
                      { loader: "sass-loader" }
                    ]
                },
                {
                    test: /\.(png|jp(e*)g|svg)$/,  
                    use: [{
                        loader: 'url-loader',
                        options: { 
                            limit: 8000, // Convert images < 8kb to base64 strings
                            name: 'images/[hash]-[name].[ext]'
                        } 
                    }]
                }
            ]
        },

        devServer: {
            historyApiFallback: true,
        },

        resolve: {
            extensions: ['.js', '.jsx'],
        },

        plugins: [
            new HtmlWebPackPlugin({
                template: path.join(__dirname, 'index.html'),
            }),
        ]
    };

};