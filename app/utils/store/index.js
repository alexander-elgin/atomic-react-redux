import { applyMiddleware, compose, createStore } from 'redux';
import { fromJS } from 'immutable';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { combineReducers } from 'redux-immutable';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(reducers, initialState = {}, sagas = [], history = {}) {
  const store = createStore(
    combineReducers({
      router: connectRouter(history),
      ...reducers,
    }),
    fromJS(initialState),
    compose(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  );

  sagaMiddleware.run(function* rootSaga() {
    yield sagas.map((saga) => fork(saga));
  });

  return store;
}
