import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Route, Switch } from 'react-router-dom';

import DefaultTemplate from '../../../templates/default';

import NotFoundPage from '../../../pages/404-NotFound';
import HomePage from '../../../pages/Home';
import FeatureListPage from '../../../pages/FeatureList';

import App from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it('renders routes switch', () => expect(app.type()).toEqual(Switch));

  describe('routes', () => {
    const checkRoute = (description, index, path, isExactPathRequired, ContentComponent) => {
      describe(description, () => {
        const className = 'component-class';
        let route;
        let template;

        beforeEach(() => {
          route = app.childAt(index);
          const Template = route.prop('component');
          template = shallow(<Template className={className} />);
        });

        it('renders on custom path', () => expect(route.prop('path')).toBe(path));
        it('renders the page content', () => expect(template.prop('component')).toEqual(ContentComponent));

        it(isExactPathRequired ? 'is activated on exact path match only' : 'does not require exact path match', () => {
          expect(route.prop('exact'))[isExactPathRequired ? 'toBeDefined' : 'toBeUndefined']();
        });

        afterEach(() => {
          expect(template.type()).toEqual(DefaultTemplate);
          expect(template.prop('className')).toBe(className);
        });
      });
    };

    checkRoute('home', 0, '/', true, HomePage);
    checkRoute('features list', 1, '/features', false, FeatureListPage);
    checkRoute('not found', 2, '', false, NotFoundPage);
  });

  it('renders routes', () => expect(app.find(Route).length).not.toBe(0));
});
