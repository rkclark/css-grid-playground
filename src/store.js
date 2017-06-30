import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import home from './routes/Home/reducer';

export default createStore(
    combineReducers({ home }),
    applyMiddleware(
        thunkMiddleware,
    ),
);
