
/*
*   React Game Store 200 - webpack - client dev server
*   author: Aurélien Dupays Dexemple
*/

import path from 'path';

import express from 'express';
import { createServer } from 'http';

import morgan from 'morgan';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import dotenv from 'dotenv';

import moment from 'moment';
import chalk from 'chalk';

import { exercices, setConfig } from './client.dev.config';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const PORT = process.env.WEBPACK_PORT || 4110;
const arg = process.argv[2] || 'home';

const entry = exercices[arg] || exercices['home'];
const config = setConfig(entry);

const compiler = webpack(config);

const webpackDevServerOptions = {
    quiet: false,
    inline: false,
    noInfo: false,
    lazy: false,
    serverSideRender: false,
    publicPath: config.output.publicPath,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: { colors: true }
};

const webpackDevHMROptions = {
    path: `/__webpack_hmr`,
    heartbeat: 2000
};

const app = express();
const server = createServer(app);

app.use(morgan((tokens, req, res) => (
    chalk.cyan(`[React Game Store]\t ${tokens.method(req, res)} ${tokens.url(req, res)} ${tokens['response-time'](req, res)} ms in ${process.env.NODE_ENV} env !`)
)));

app.use(webpackDevMiddleware(compiler, webpackDevServerOptions));
app.use(webpackHotMiddleware(compiler, webpackDevHMROptions));

console.info(chalk.cyan(`[React Game Store]\t Starting server in ${process.env.NODE_ENV} env at ${moment().format('llll')} !`));
server.listen(PORT);
server.on('error', (err) => {
    console.log(chalk.red(`[React Game Store]\t error : ${err} in ${process.env.NODE_ENV} env !`));
    process.exit(1);
});

server.on('listening', () => {
    const addr = server.address();
    console.info(chalk.cyan(`[React Game Store]\t Server listening on http://${addr['address']}:${PORT} in ${process.env.NODE_ENV} env since ${moment().format('llll')} !`));
});