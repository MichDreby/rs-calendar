
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { eventRequest } from '../middleware/eventRequest';

export default function configureStore(initialState) {
    const logger = createLogger();
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger, eventRequest));
    if (module.hot) {
        module.hot.accept(rootReducer, () => {
            const nextRootReducer = rootReducer.default;
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
