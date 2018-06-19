import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Circle from '../Circle';

Enzyme.configure({ adapter: new Adapter() });

describe('<Circle />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = mount(<Circle />);
    expect(renderedComponent.find('div').length).toEqual(1);
  });

  it('should have a className attribute', () => {
    const renderedComponent = mount(<Circle />);
    expect(renderedComponent.find('div').prop('className')).toBeDefined();
  });

  it('should not adopt attributes', () => {
    const id = 'test';
    const renderedComponent = mount(<Circle id={id} />);
    expect(renderedComponent.find('div').prop('id')).toBeUndefined();
  });
});
