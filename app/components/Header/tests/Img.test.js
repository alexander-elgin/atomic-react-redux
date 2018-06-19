import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Img from '../Img';

Enzyme.configure({ adapter: new Adapter() });

describe('<Img />', () => {
  it('should render an <img> tag', () => {
    const renderedComponent = mount(<Img src={'http://example.com/test.jpg'} alt={'test'} />);
    expect(renderedComponent.find('img').length).toEqual(1);
  });

  it('should have a className attribute', () => {
    const renderedComponent = mount(<Img src={'http://example.com/test.jpg'} alt={'test'} />);
    expect(renderedComponent.find('img').prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const renderedComponent = mount(<Img src={'http://example.com/test.jpg'} alt={'test'} />);
    expect(renderedComponent.find('img').prop('alt')).toEqual('test');
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = mount(<Img src={'http://example.com/test.jpg'} attribute={'test'} alt={'test'} />);
    expect(renderedComponent.find('img').prop('attribute')).toBeUndefined();
  });
});
