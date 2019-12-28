import { applyMiddleware, compose, createStore } from 'redux';
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(reducers, initialState = {}, sagas = []) {
  const store = createStore(
    combineReducers(reducers),
    fromJS(initialState),
    compose(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(function* rootSaga() {
    yield sagas.map((saga) => fork(saga));
  });

  return store;
}
