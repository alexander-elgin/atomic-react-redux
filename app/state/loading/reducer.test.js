import { fromJS } from 'immutable';

import loadingReducer from './reducer';

import {
  resetLoading,
  setLoading,
} from './actions';

describe('loadingReducer', () => {
  let state;
  const initialState = {
    loading: false,
  };

  beforeEach(() => {
    state = fromJS(initialState);
  });

  describe('default', () => {
    it('returns the initial state', () => expect(loadingReducer()).toEqual(state));
  });

  describe('#setLoading', () => {
    it('sets the loading flag', () => {
      const expectedResult = state.set('loading', true);
      expect(loadingReducer(state, setLoading())).toEqual(expectedResult);
    });
  });

  describe('#resetLoading', () => {
    it('resets the loading flag', () => {
      const expectedResult = state.set('loading', false);
      expect(loadingReducer(state, resetLoading())).toEqual(expectedResult);
    });
  });
});
