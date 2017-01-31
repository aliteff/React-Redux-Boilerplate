// import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import allReducers from '../reducers';
import storeUsers from './store-users';


const UserStoreDefault = {
	users: storeUsers,
};



const logger = createLogger();
export default createStore(
    allReducers,
    UserStoreDefault,
    applyMiddleware(thunk, promise, logger)
);
