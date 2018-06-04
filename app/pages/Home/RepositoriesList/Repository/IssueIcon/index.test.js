import React from 'react';
import { shallow } from 'enzyme';

import IssueIcon from './';

describe('<IssueIcon />', () => {
  const className = 'issue-icon';
  let component;

  beforeEach(() => {
    component = shallow(<IssueIcon className={className} />);
  });

  it('renders a SVG', () => expect(component.type()).toBe('svg'));
  it('sets the width', () => expect(component.prop('width')).toBe('0.875em'));
  it('sets the height', () => expect(component.prop('height')).toBe('1em'));
  it('sets the height', () => expect(component.prop('className')).toBe(className));
});
