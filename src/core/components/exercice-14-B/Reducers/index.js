import { combineReducers } from 'redux';
import { gameReducer } from './GameReducer';

export const appReducers = combineReducers({
    gameReducer,
});