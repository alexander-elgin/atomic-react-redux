import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FormattedMessage, IntlProvider } from 'react-intl';

import Header from './';

import A from '../A';
import HeaderLink from '../HeaderLink';
import Img from '../Img';
import LinksBlock from '../LinksBlock';
import NavBar from '../NavBar';

import Banner from './banner.jpg';

Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', () => {
  const AUTHENTICATED = false;
  const logoAltText = 'Logo';
  let wrapper;

  beforeEach(() => {
    const intlProvider = new IntlProvider({ locale: 'en', messages: {} }, {});
    const { intl } = intlProvider.getChildContext();
    intl.formatMessage = () => logoAltText;
    wrapper = shallow(<Header authenticated={AUTHENTICATED} intl={intl} />);
  });

  it('renders auth links block', () => {
    expect(wrapper.find(LinksBlock).first().prop('authenticated')).toEqual(AUTHENTICATED);
  });

  describe('logo', () => {
    let logoLink;

    beforeEach(() => {
      logoLink = wrapper.find(A).first();
    });

    it('refers the logo to the project repository', () => {
      expect(logoLink.prop('href')).toBe('https://github.com/alexander-elgin/react-redux-passport-boilerplate');
    });

    it('renders the logo image', () => {
      const logo = logoLink.find(Img).first();
      expect(logo.prop('alt')).toBe(logoAltText);
      expect(logo.prop('src')).toEqual(Banner);
    });
  });

  describe('NavBar', () => {
    let navbar;

    const checkLink = (description, index, uri, messageId, defaultText) => {
      it(description, () => {
        const link = navbar.childAt(index);
        expect(link.type()).toEqual(HeaderLink);
        expect(link.prop('to')).toBe(uri);

        const message = link.childAt(0);
        expect(message.type()).toEqual(FormattedMessage);
        expect(message.prop('id')).toBe(messageId);
        expect(message.prop('defaultMessage')).toBe(defaultText);
      });
    };

    beforeEach(() => {
      navbar = wrapper.find(NavBar).first();
    });

    checkLink('renders home link', 0, '/', 'boilerplate.organisms.Header.home', 'Home');
    checkLink('renders features link', 1, '/features', 'boilerplate.organisms.Header.features', 'Features');
  });
});
