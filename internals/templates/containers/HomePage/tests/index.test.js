import React from 'react';
import { FormattedMessage } from 'react-intl';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HomePage from '../index';
import messages from '../messages';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});
