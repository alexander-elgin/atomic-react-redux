import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DefaultTemplate from '../../../templates/default';

import NotFoundPage from '../../../pages/404-NotFound';
import HomePage from '../../../pages/Home';
import FeatureListPage from '../../../pages/FeatureList';

import SignInPage from '../../../pages/SignIn';
import SignOutPage from '../../../pages/SignOut';
import SignUpPage from '../../../pages/SignUp';

import UnauthorizedRoute from '../UnauthorizedRoute';

import App from './';

Enzyme.configure({ adapter: new Adapter() });

const getMuiTheme = require('material-ui/styles/getMuiTheme');
const reactIcons = require('react-icons');

describe('<App />', () => {
  const DUMMY_MUI_THEME = { dummyField: 'dummy MUI Theme' };
  let app;

  beforeEach(() => {
    getMuiTheme.default = jest.fn().mockReturnValue(DUMMY_MUI_THEME);
    reactIcons.IconContext = { Provider: 'iconContextProvider' };
    app = shallow(<App />);
  });

  it('renders Material UI Theme Provider', () => {
    expect(app.type()).toEqual(MuiThemeProvider);
    expect(app.prop('muiTheme')).toEqual(DUMMY_MUI_THEME);
  });

  it('sets the React icons default vertical alignment', () => {
    const iconContextProvider = app.find(reactIcons.IconContext.Provider).first();
    expect(iconContextProvider.prop('value')).toEqual({ style: { verticalAlign: 'middle' } });
  });

  describe('routes', () => {
    let routeSwitch;

    beforeEach(() => {
      routeSwitch = app.find(Switch).first();
    });

    const checkRoute = (description, index, path, isExactPathRequired, ContentComponent, RouteType) => {
      describe(description, () => {
        const className = 'component-class';
        let route;
        let template;

        beforeEach(() => {
          route = routeSwitch.childAt(index);
          const Template = route.prop('component');
          template = shallow(<Template className={className} />);
        });

        it('passes props to the content component', () => expect(template.prop('className')).toBe(className));
        it('uses the default template', () => expect(template.type()).toEqual(DefaultTemplate));
        it('uses a particular route type', () => expect(route.type()).toEqual(RouteType));
        it('renders on custom path', () => expect(route.prop('path')).toBe(path));
        it('renders the page content', () => expect(template.prop('component')).toEqual(ContentComponent));

        it(isExactPathRequired ? 'is activated on exact path match only' : 'does not require exact path match', () => {
          expect(route.prop('exact'))[isExactPathRequired ? 'toBeDefined' : 'toBeUndefined']();
        });
      });
    };

    checkRoute('home', 0, '/', true, HomePage, Route);
    checkRoute('features list', 1, '/features', false, FeatureListPage, Route);
    checkRoute('sign in', 2, '/signin', false, SignInPage, UnauthorizedRoute);
    checkRoute('sign up', 3, '/signup', false, SignUpPage, UnauthorizedRoute);
    checkRoute('sign out', 4, '/signout', false, SignOutPage, Route);
    checkRoute('not found', 5, '', false, NotFoundPage, Route);
  });
});
