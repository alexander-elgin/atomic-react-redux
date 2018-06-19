import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import Adapter from 'enzyme-adapter-react-16';

import H1 from 'components/H1';
import messages from './messages';
import FeaturePage from './main';

Enzyme.configure({ adapter: new Adapter() });

describe('<FeatureList />', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <FeaturePage />
    );
  });

  it('renders the header', () => {
    expect(component.contains(
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    )).toBe(true);
  });

  it('never re-renders', () => expect(component.instance().shouldComponentUpdate()).toBe(false));

  describe('Helmet', () => {
    let helmet;

    beforeEach(() => {
      helmet = component.find(Helmet).first();
    });

    it('sets the page title', () => {
      const title = helmet.find('title').first();
      expect(title.text()).toBe('Feature Page');
    });

    it('sets the page description', () => {
      const title = helmet.find('meta').first();
      expect(title.prop('name')).toBe('description');
      expect(title.prop('content')).toBe('Feature page of React.js Boilerplate application');
    });
  });
});
