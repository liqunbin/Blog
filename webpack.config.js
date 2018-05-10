const path = require('path');
const htmlWebpackPlugin  = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');//编译完打开链接
const webpack = require('webpack');
const config = require('./config/config');
const webpack_conf = {
    name: 'client',
    target: 'web',
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
        modules: [
            path.resolve(__dirname, './src'),
            'node_modules'
        ]
    },
    module: {},
};
// webpack_conf.mode = 'development'; //设置环境变量，可以设置process.env.NODE_ENV的值,  但是我现在加上这句就报错了
// webpack_conf.entry = [
//     'babel-polyfill',
//     // 'webpack-hot-middleware/client',
//     // 'react-hot-loader/patch',
//     path.resolve(__dirname, 'src/app.js')
//   ];

webpack_conf.entry = {
        index: [
            'react-hot-loader/patch',
            `webpack-hot-middleware/client?noInfo=true&reload=true`,
            'babel-polyfill',
            path.resolve(__dirname, 'src/app.js')
        ],
        vendor: ['react', 'react-dom', 'react-router-dom']
    },
/*
babel-polyfill 据说用于兼容浏览器;
webpack-hot-middleware/client 和 react-hot-loader/patch 做热更新添加的模块
*/

webpack_conf.output = {
    path:path.resolve(__dirname, 'dist'),//输出的文件的路径，__dirname node相对运行命令的决定路径
    publicPath:'/',
    filename: 'js/[name]-bundle.js',
    // chunkFilename: debug? '[name].js':'[name].[chunkhash].js',
};
webpack_conf.devtool = 'source-map';


// webpack_conf.devServer={
//         contentBase: path.join(__dirname, 'dist'),
//         port: 3000,
//         host: 'localhost',
//         open:true
        // historyApiFallback: true,
        // inline: true,
        // // hot: true,
        // watchOptions: {
        //   aggregateTimeout: 300,
        //   poll: 1000
        // }
    // };

webpack_conf.plugins = [
  new htmlWebpackPlugin({
    template:'./index.html',
    title:'webpack is good',
    data: new Date(),
    // showErrors: true,// 是否将错误信息输出到html页面中
    minify:{
      removeComments:true,//去掉注释
      collapseWhitespace:true,//去掉空格
    },
    // chunks:['main'],//仅加载哪些js模块
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),//热加载插件
  new OpenBrowserPlugin({
          url: `${config.host}:${config.port}`
      })
];



    webpack_conf.module.rules = [
        {
            test:/\.js$/,
            exclude: /node_modules/,
            include: [
                path.resolve(__dirname, "src")//定义只解析SRC下的js文件
            ],
            use:{
              loader:'babel-loader',
            }
        },
        {
            test: /\.css$/,
            use: [
              "style-loader",
               "css-loader"
             ]
        }, {
            test: /\.less$/,
            use: [
              "postcss-loader",
              "less-loader"
            ]
        }, {
            test: /\.(png|jpg|gif|md)$/,
            use: ['url-loader?limit=10000&name=images/[md5:hash:base64:10].[ext]']
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: ['url-loader?limit=10000&mimetype=image/svg+xml']
        },
        {
          test: /\.(eot|woff|ttf|woff2)$/,
          use: 'url-loader'
        }
    ];

module.exports = webpack_conf;
