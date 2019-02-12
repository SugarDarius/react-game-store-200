
/*
*   React Game Store 200 - api
*   author: Aurélien Dupays Dexemple
*/

import { createServer } from 'http';
import path from 'path';

import SwaggeUIDist from 'swagger-ui-dist';

import express from 'express';
import bodyParser from 'body-parser';

import morgan from 'morgan';
import moment from 'moment';

import chalk from 'chalk';

import dotenv from 'dotenv';

import {
    findAll,
    findById,
    addNew,
    updateById,
    deleteById
} from './rest';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const { red, cyan } = chalk;

const API_PORT = process.env.API_PORT || 5010;

const pathToSwaggerUi = SwaggeUIDist.absolutePath();

const app = express();
const server = createServer(app);

app.use(morgan((tokens, req, res) => (
    cyan(`[React Game Store API]\t ${tokens.method(req, res)} ${tokens.url(req, res)} ${tokens['response-time'](req, res)} ms in ${process.env.NODE_ENV} env !`)
)));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(pathToSwaggerUi))
app.use('/helpers', express.static(path.resolve(__dirname, './helpers')))
app.use('/media', express.static(path.resolve(__dirname, './media')));

app.get('/api/games', findAll);
app.get('/api/game/:id', findById);

app.post('/api/game', addNew);
app.put('/api/game/:id', updateById);
app.delete('/api/game/:id', deleteById);

app.use('/', (req, res) => {
    res.status(200).send('React Game Store API');
});

console.info(cyan(`[React Game Store API]\t Starting API in ${process.env.NODE_ENV} env at ${moment().format('llll')} !`));

server.listen(API_PORT);
server.on('error', (err) => {
    console.error(red(`[React Game Store API]\t error : ${err} in ${process.env.NODE_ENV} env !`));
    process.exit(1);
});

server.on('listening', () => {
    const addr = server.address();
    console.info(cyan(`[React Game Store API]\t API listening on http://${addr['address']}:${API_PORT} in ${process.env.NODE_ENV} env since ${moment().format('llll')} !`));
    console.info(cyan(`[React Game Store API]\t SwaggerUI available on http://${addr['address']}:${API_PORT}?url=http://localhost:${API_PORT}/helpers/swagger.yaml`));
});