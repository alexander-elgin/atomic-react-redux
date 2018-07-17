import { createSelector } from 'reselect';

const selectLoading = (state) => state.get('loading');

const makeSelectLoading = () => createSelector(
  selectLoading,
  (globalState) => globalState.get('loading')
);

export {
  selectLoading,
  makeSelectLoading,
};
