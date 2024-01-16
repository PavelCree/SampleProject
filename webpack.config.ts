const path = require("path");
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );


const configProxy = {
    target: 'https://llm.api.cloud.yandex.net',
    secure: false,
    changeOrigin: true,
    pathRewrite: {"^/api" : ""},
    ws: false,
    autoRewrite: true,
    followRedirects: false,
    cookieDomainRewrite: { '*': 'localhost' },
    withCredentials: true,
    onProxyReq: async function onProxyReq(proxyReq: any) {
        console.info(
            `proxy to: ${proxyReq?.protocol}://${proxyReq?.host}${proxyReq.path} method ${proxyReq?.method} cookies: ${proxyReq?._options?.headers?.cookies}`,
        );
    },
    onProxyRes: async function onProxyRes(proxyRes: any) {
        if (
            [307, 308, 302].indexOf(proxyRes.statusCode) > -1 &&
            proxyRes.headers.location
        ) {
            // eslint-disable-next-line no-param-reassign
            proxyRes.headers.location = proxyRes.headers.location.replace(
                new RegExp(`${process.env.SERVER_URL}:443/?`),
                '/',
            );
        }
    },

    xfwd: false,
};

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: path.resolve( __dirname, 'public/index.html' ),
    filename: 'index.html'
});


const config = {
    mode:
        process.env.NODE_ENV ?? "development",
    entry: "./src/index.tsx",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    devServer: {
        allowedHosts: 'all',
        hot: true,
        open: true,
        proxy: {
            '/api': configProxy,
        }
    },
    module: {
    rules: [
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
        },
    ],
},
output: {
    filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
},
plugins: [
    htmlWebpackPlugin,
],
};

export default config;
