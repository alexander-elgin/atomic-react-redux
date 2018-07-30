import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Error from './';

Enzyme.configure({ adapter: new Adapter() });

const children = (<h1>Test</h1>);
const renderComponent = (props = {}) => shallow(
  <Error {...props}>
    {children}
  </Error>
);

describe('<Error />', () => {
  it('renders a <div> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('div');
  });

  it('has children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('has a className attribute', () => {
    const className = 'test';
    const renderedComponent = renderComponent({ className });
    expect(renderedComponent.find('div').hasClass(className)).toEqual(true);
  });
});
