import React from 'react';
import { shallow } from 'enzyme';

import List from './';

describe('<List />', () => {
  let component;
  const className = 'list';
  const items = [
    'list item',
  ];

  beforeEach(() => {
    component = shallow(<List items={items} className={className} />);
  });

  it('renders an <ul> tag', () => expect(component.type()).toBe('ul'));
  it('sets the className', () => expect(component.prop('className')).toBe(className));
  it('renders the list item', () => expect(component.find('li').first().text()).toBe(items[0]));
});
