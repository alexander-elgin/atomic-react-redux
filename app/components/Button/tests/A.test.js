import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import A from '../A';

Enzyme.configure({ adapter: new Adapter() });

describe('<A />', () => {
  it('should render an <a> tag', () => {
    const renderedComponent = shallow(<A />);
    expect(renderedComponent.type()).toEqual('a');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<A />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<A id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<A attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
