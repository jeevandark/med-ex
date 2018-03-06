import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import messagesReducer from './reducers/messagesReducer';

const store = createStore(
    combineReducers({
        messagesReducer
    }), 
    {},
    applyMiddleware(logger)
);

export { store };