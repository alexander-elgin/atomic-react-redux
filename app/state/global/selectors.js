import { createSelector } from 'reselect';

const selectLoading = (state) => state.get('global');

const makeSelectLoading = () => createSelector(
  selectLoading,
  (globalState) => globalState.get('loading')
);

export {
  selectLoading,
  makeSelectLoading,
};
