import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import { watchLoadProducts } from '../sagas';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(watchLoadProducts);

    return store;
}