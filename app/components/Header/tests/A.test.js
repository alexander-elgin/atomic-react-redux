import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import A from '../A';

Enzyme.configure({ adapter: new Adapter() });

describe('<A />', () => {
  it('should render an <a> tag', () => {
    const renderedComponent = mount(<A />);
    expect(renderedComponent.find('a').length).toEqual(1);
  });

  it('should have a className attribute', () => {
    const renderedComponent = mount(<A />);
    expect(renderedComponent.find('a').prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = mount(<A id={id} />);
    expect(renderedComponent.find('a').prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = mount(<A attribute={'test'} />);
    expect(renderedComponent.find('a').prop('attribute')).toBeUndefined();
  });
});
