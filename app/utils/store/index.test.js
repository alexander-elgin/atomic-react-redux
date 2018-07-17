import { fromJS } from 'immutable';
import configureStore from './';

jest.mock('redux', () => ({
  applyMiddleware: (middleware1, middleware2) => ({
    appliedMiddleware: ['sagaMiddleware', middleware2],
  }),
  compose: (composed) => ({ composed }),
  createStore: (reducers, state, middleware) => ({ reducers, state, middleware }),
}));

jest.mock('react-router-redux', () => ({
  routerMiddleware: (history) => ({
    routerHistory: history,
  }),
}));

jest.mock('redux-immutable', () => ({
  combineReducers: (reducers) => ({
    combinedReducers: reducers,
  }),
}));

let mockSagaMiddleware;

jest.mock('redux-saga', () => {
  mockSagaMiddleware = {
    run: jest.fn(),
  };
  return () => mockSagaMiddleware;
});

describe('store', () => {
  const reducersList = ['reducer 1', 'reducer 2'];
  const initialState = {
    field: 'value',
  };
  const sagasList = ['saga A', 'saga B'];
  const browserHistory = 'the history';

  const getExpectedResult = (state, history) => ({
    reducers: {
      combinedReducers: { ...reducersList },
    },
    state: fromJS(state),
    middleware: {
      composed: {
        appliedMiddleware: [
          'sagaMiddleware',
          {
            routerHistory: history,
          },
        ],
      },
    },
  });

  describe('custom arguments', () => {
    it('returns the store', () => {
      expect(configureStore(reducersList, initialState, sagasList, browserHistory))
        .toEqual(getExpectedResult(initialState, browserHistory));
    });
  });

  describe('default arguments', () => {
    it('returns the store', () => expect(configureStore(reducersList)).toEqual(getExpectedResult({}, {})));
  });
});
