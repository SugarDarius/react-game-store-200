
/*
*   React Game Store 200 - api - workers
*   author: Aurélien Dupays Dexemple
*/

import * as GamesService from '../services/games';

export function findAll(req, res) {
    return res.status(200).json(GamesService.getAll());
}

export function findById(req, res) {
    try {
        res.status(200).json(GamesService.get(req.params.id));
    } 
    catch (error) {
        res.status(405).json({ error: error.message });
    }
}

export function addNew(req, res) {
    console.log(req.body);
    res.status(201).json(GamesService.create(req.body));
}

export function updateById(req, res) {
    try {
        res.status(200).json(GamesService.update(req.params.id));
    }
    catch (error) {
        res.status(405).json({ error: error.message });
    } 
}

export function deleteById(req, res) {
    try {
        res.status(200).json({ deleted: GamesService.remove(req.params.id) });
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    } 
}