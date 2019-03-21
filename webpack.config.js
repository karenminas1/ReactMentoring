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
            ]
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