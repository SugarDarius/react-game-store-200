import { combineReducers } from 'redux';
import { gamesReducer } from './GamesReducer';

export const appReducers = combineReducers({
    gamesReducer: gamesReducer,
});