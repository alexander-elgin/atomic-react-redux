import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Wrapper from '../Wrapper';

Enzyme.configure({ adapter: new Adapter() });

describe('<Wrapper />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<Wrapper />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Wrapper />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Wrapper id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Wrapper attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
