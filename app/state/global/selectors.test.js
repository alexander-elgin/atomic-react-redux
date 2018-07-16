import { fromJS } from 'immutable';

import {
  selectLoading,
  makeSelectLoading,
} from './selectors';

describe('loading selector', () => {
  const loading = false;
  const loadingState = fromJS({ loading });

  const mockedState = fromJS({
    global: loadingState,
  });

  describe('#selectLoading', () => {
    it('select the loading state', () => expect(selectLoading(mockedState)).toEqual(loadingState));
  });

  describe('#makeSelectLoading', () => {
    const loadingSelector = makeSelectLoading();
    it('selects the loading', () => expect(loadingSelector(mockedState)).toEqual(loading));
  });
});
