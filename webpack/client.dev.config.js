
/*
*   React Game Store 200 - webpack - client dev config
*   author: Aurélien Dupays Dexemple
*/

import path from 'path';
import webpack from 'webpack';

import dotenv from 'dotenv';

import postcssConfig from './postcss.config';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const PORT = process.env.WEBPACK_PORT || 5010;

const baseEntry = [
    'react-hot-loader/patch',
    `webpack-hot-middleware/client?path=http://localhost:${PORT}/__webpack_hmr&timeout=20000`,
];

const exercices = {
    'home': [
        ...baseEntry,
        path.resolve(__dirname, '../client/home.jsx'),
    ],

    'exercice-01': [
        ...baseEntry,
        path.resolve(__dirname, '../client/exercice-01.jsx'),
    ],
    
    'exercice-01-correction': [
        ...baseEntry,
        path.resolve(__dirname, '../client/exercice-01-correction.jsx'),
    ],

    'exercice-02': [
        ...baseEntry,
        path.resolve(__dirname, '../client/exercice-02.jsx'),
    ],

    'exercice-02-correction': [
        ...baseEntry,
        path.resolve(__dirname, '../client/exercice-02-correction.jsx'),
    ],

    'exercice-03': [
        ...baseEntry,
        path.resolve(__dirname, '../client/exercice-03.jsx'),
    ],

    'exercice-03-correction': [
        ...baseEntry,
        path.resolve(__dirname, '../client/exercice-03-correction.jsx'),
    ],

    'exercice-04': [
        ...baseEntry,
        path.resolve(__dirname, '../client/exercice-04.jsx'),
    ],

    'exercice-04-correction': [
        ...baseEntry,
        path.resolve(__dirname, '../client/exercice-04-correction.jsx'),
    ],

    'exercice-05': [
        ...baseEntry,
        path.resolve(__dirname, '../client/exercice-05.jsx'),
    ],

    'exercice-05-correction': [
        ...baseEntry,
        path.resolve(__dirname, '../client/exercice-05-correction.jsx'),
    ],

    'exercice-06': [
        ...baseEntry,
        path.resolve(__dirname, '../client/exercice-06.jsx'),
    ],

    'exercice-06-correction': [
        ...baseEntry,
        path.resolve(__dirname, '../client/exercice-06-correction.jsx'),
    ],

    'exercice-07': [
        ...baseEntry,
        path.resolve(__dirname, '../client/exercice-07.jsx'),
    ],

    'exercice-07-correction': [
        ...baseEntry,
        path.resolve(__dirname, '../client/exercice-07-correction.jsx'),
    ],

    'exercice-08': [
        ...baseEntry,
        path.resolve(__dirname, '../client/exercice-08.jsx'),
    ],

    'exercice-08-correction': [
        ...baseEntry,
        path.resolve(__dirname, '../client/exercice-08-correction.jsx'),
    ],

    'exercice-09': [
        ...baseEntry,
        path.resolve(__dirname, '../client/exercice-09.jsx'),
    ],

    'exercice-09-correction': [
        ...baseEntry,
        path.resolve(__dirname, '../client/exercice-09-correction.jsx'),
    ],

    'exercice-10': [
        ...baseEntry,
        path.resolve(__dirname, '../client/exercice-10.jsx'),
    ],

    'exercice-10-correction': [
        ...baseEntry,
        path.resolve(__dirname, '../client/exercice-10-correction.jsx'),
    ],
}

const setConfig = (entry) => ({
    mode: 'development',
    devtool: 'cheap-module-source-map',

    entry,

    output: {
        publicPath: `http://localhost:${PORT}/build/`,
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, '../build')
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    { loader: 'postcss-loader', options: postcssConfig }
                ]
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    { loader: 'sass-loader' },
                    { loader: 'postcss-loader', options: postcssConfig }
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    { loader: 'file-loader', options: { name: '[name].[ext]', limit: 10000, outputPath: 'images/' } }
                ]
            },
            {
                test: /\.(otf|woff2?|ttf|eot|svg)$/i,
                use: [
                    { loader: 'file-loader', options: { name: '[name].[ext]', limit: 10000, outputPath: 'fonts/' } }
                ]
            }
        ]
    },

    stats: {
        children: false
    },

    resolve: {
        extensions: ['.json', '.js', '.jsx', '.scss', '.css']
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        })
    ]
})

export { 
    exercices,
    setConfig 
}