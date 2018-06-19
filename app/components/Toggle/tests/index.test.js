import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { IntlProvider, defineMessages } from 'react-intl';
import Adapter from 'enzyme-adapter-react-16';

import Toggle from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<Toggle />', () => {
  it('should contain default text', () => {
    const defaultEnMessage = 'someContent';
    const defaultDeMessage = 'someOtherContent';
    const messages = defineMessages({
      en: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultEnMessage,
      },
      de: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultDeMessage,
      },
    });
    const renderedComponent = shallow(
      <IntlProvider locale="en">
        <Toggle values={['en', 'de']} messages={messages} />
      </IntlProvider>
    );
    expect(renderedComponent.contains(<Toggle values={['en', 'de']} messages={messages} />)).toBe(true);
    expect(renderedComponent.find('option').length).toBe(0);
  });
  it('should not have ToggleOptions if props.values is not defined', () => {
    const renderedComponent = shallow(<Toggle />);
    expect(renderedComponent.contains(<option>--</option>)).toBe(true);
    expect(renderedComponent.find('option').length).toBe(1);
  });
});
