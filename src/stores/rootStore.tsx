/* eslint-disable @typescript-eslint/no-var-requires */
import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootSaga from './rootSaga';

import partyReducer from './party/party.reducer';
import alarmReducer from './alarm/alarm.reducer';

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['AccountReducer'],
};

const rootReducer = combineReducers({ partyReducer, alarmReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const store = createStore<any, any, any, any>(
    persistedReducer,
    bindMiddleware([sagaMiddleware]),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);

  return { store, persistor };
}

export default configureStore;
