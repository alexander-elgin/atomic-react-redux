import React from 'react';
import { shallow } from 'enzyme';

import Feature from './';

describe('<Feature />', () => {
  const description = 'default description';
  const header = 'default header';

  let component;

  beforeEach(() => {
    component = shallow(<Feature description={description} header={header} />);
  });

  it('renders the description', () => expect(component.find('.feature-description').first().text()).toBe(description));
  it('renders the header', () => expect(component.find('.feature-header').first().text()).toBe(header));
});
