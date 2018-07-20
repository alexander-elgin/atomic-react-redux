import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LocaleSwitcher from './';
import LanguageProvider from '../../../../containers/LanguageProvider';

import reducer from '../../../../state/language/reducer';
import configureStore from '../../../../utils/store';
import { translationMessages } from '../../../../i18n';

Enzyme.configure({ adapter: new Adapter() });

describe('LocaleSwitcher component', () => {
  let store;

  beforeAll(() => {
    store = configureStore({
      language: reducer,
    });
  });

  it('should render the default language messages', () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <LocaleSwitcher />
        </LanguageProvider>
      </Provider>
    );
    expect(renderedComponent.contains(<LocaleSwitcher />)).toBe(true);
  });

  it('should present the default `en` english language option', () => {
    const renderedComponent = mount(
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <LocaleSwitcher />
        </LanguageProvider>
      </Provider>
    );
    expect(renderedComponent.contains(<option value="en">en</option>)).toBe(true);
  });
});
