import { createSelector } from 'reselect';

const selectNav = (state) => state.get('nav');

const makeSelectPageTitle = () => createSelector(
  selectNav,
  (globalState) => globalState.get('pageTitle')
);

export {
  selectNav,
  makeSelectPageTitle,
};
