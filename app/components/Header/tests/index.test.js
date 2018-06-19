import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(
      <Header />
    );
    expect(renderedComponent.find('div').length).toEqual(1);
  });
});
