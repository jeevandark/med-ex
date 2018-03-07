import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import messagesReducer from './reducers/messagesReducer';
import userReducer from './reducers/userReducer';
import createSagaMiddleware from "redux-saga";
import { sagas } from "./sagas/index";


let middleWares = [];
middleWares.push(logger);
const sagaMiddleWare = createSagaMiddleware();
middleWares.push(sagaMiddleWare);
let combinedMiddlewares = applyMiddleware(...middleWares);
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
    combinedMiddlewares = compose(combinedMiddlewares, window.devToolsExtension());
}

const store = createStore(
    combineReducers({
        messages: messagesReducer,
        user: userReducer
    }),
    {},
    combinedMiddlewares
);

sagaMiddleWare.run(sagas);

export { store };