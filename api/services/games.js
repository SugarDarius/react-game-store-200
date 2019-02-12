
/*
*   React Game Store 200 - api - services - games
*   author: Aurélien Dupays Dexemple
*/

import uuid from 'uuid';
import _ from 'lodash';

import games from '../data/games.json';

const gamesRepository = { ...games };

export function getAll() {
    return [ ...gamesRepository.data ];
}

export function get(id) {
    const game = _.find(gamesRepository.data, { _id: id });

    if (game === undefined) {
        throw new Error('Undefined Game');
    }

    return _.find(gamesRepository.data, { _id: id });
}

export function create(data) {
    const createdGame = {
        _id: uuid(),
        title: data.title || '',
        description: data.description || '',
        platforms: data.platforms || [],
        genders: data.genders || [],
        price: data.price || 0.00,
        rating: data.rating || 0.0,
        developers: data.developers || [],
        releaseDate: data.releaseDate || new Date().toISOString(),
        thumbnail: data.thumbnail || '',
        updatedAt: new Date().toISOString()
    };

    gamesRepository.data = [ ...gamesRepository.data, { ...createdGame } ];

    return createdGame;
}

export function update(id, data) {
    const gameIndex = _.findIndex(gamesRepository.data, { _id: id });

    if (game === -1) {
        throw new Error('Undefined Game');
    }

    const game = gamesRepository.data[gameIndex];
    const gameUpdated = {
       ...gameUpdated,
       description: data.description || game.description,
       rating: data.rating || game.rating,
       price: data.price || game.price,
       updatedAt: new Date().toISOString()
    };

    gamesRepository.data[gameIndex] = gameUpdated;

    return [ ...gamesRepository.data ] ;
}

export function remove(id) {
    const gameIndex = _.findIndex(gamesRepository.data, { _id: id });

    if (game === -1) {
        throw new Error('Undefined Game');
    }

    gamesRepository.data = [
        ...gamesRepository.data.slice(0, gameIndex), 
        ...gamesRepository.data.slice(gameIndex + 1)
    ];

    return true;
}