import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Link } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { CardText } from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { TextField } from 'redux-form-material-ui';
import { Field } from 'redux-form/immutable';

import SignInForm from './';

import Error from '../../../atoms/Error';
import { checkTranslation } from '../../../utils/test';

Enzyme.configure({ adapter: new Adapter() });

describe('<SignInForm />', () => {
  const error = 'ERROR';
  const spies = {};
  let form;

  beforeEach(() => {
    const intlProvider = new IntlProvider({ locale: 'en', messages: {} }, {});
    const { intl } = intlProvider.getChildContext();
    intl.formatMessage = (messageData) => messageData.defaultMessage;

    spies.handleSubmit = jest.fn((callback) => (data) => callback(data));
    spies.onSubmit = jest.fn();
    form = shallow(<SignInForm handleSubmit={spies.handleSubmit} onSubmit={spies.onSubmit} intl={intl} error={error} />);
  });

  it('sets the form submit handler', () => {
    const data = { name: 'alexander-elgin', email: 'sascha.elgin@gmail.com' };
    form.prop('onSubmit')(data);
    expect(spies.onSubmit).toBeCalledWith(data);
  });

  describe('header', () => {
    let header;

    beforeEach(() => {
      header = form.childAt(0);
    });

    it('renders the form header', () => {
      expect(header.type()).toBe('h2');
      expect(header.prop('className')).toBe('card-heading');
      checkTranslation(header.childAt(0), 'boilerplate.shared.Auth.signIn', 'Sign in');
    });
  });

  describe('error', () => {
    let generalError;

    beforeEach(() => {
      generalError = form.childAt(1);
    });

    it('renders an error message not related to any field', () => {
      expect(generalError.type()).toEqual(Error);
      expect(generalError.childAt(0).text()).toEqual(error);
    });
  });

  describe('form elements', () => {
    let fieldWrapper;
    let field;

    describe('fields', () => {
      describe('email', () => {
        beforeEach(() => {
          fieldWrapper = form.childAt(2);
          field = fieldWrapper.childAt(0);
        });

        it('renders the field', () => {
          expect(field.prop('floatingLabelText')).toBe('Email');
          expect(field.prop('name')).toBe('email');
          expect(field.prop('type')).toBe('email');
        });
      });

      describe('password', () => {
        beforeEach(() => {
          fieldWrapper = form.childAt(3);
          field = fieldWrapper.childAt(0);
        });

        it('renders the field', () => {
          expect(field.prop('floatingLabelText')).toBe('Password');
          expect(field.prop('name')).toBe('password');
          expect(field.prop('type')).toBe('password');
        });
      });

      afterEach(() => {
        expect(field.type()).toEqual(Field);
        expect(field.prop('component')).toEqual(TextField);
        expect(fieldWrapper.prop('className')).toBe('field-line');
      });
    });

    describe('button', () => {
      beforeEach(() => {
        fieldWrapper = form.childAt(4);
        field = fieldWrapper.childAt(0);
      });

      it('renders the field', () => {
        expect(field.type()).toEqual(Button);
        expect(field.prop('label')).toBe('Sign in');
        expect(field.prop('type')).toBe('submit');
        expect(field.prop('variant')).toBe('contained');
      });

      afterEach(() => {
        expect(fieldWrapper.prop('className')).toBe('button-line');
      });
    });

    describe('link', () => {
      beforeEach(() => {
        fieldWrapper = form.childAt(5);
        field = fieldWrapper.find(Link).first();
      });

      it('renders the link', () => {
        expect(field.prop('to')).toBe('/signup');
        checkTranslation(field.childAt(0), 'boilerplate.shared.Auth.signUp', 'Sign up');
      });

      it('renders the link wrapper', () => {
        expect(fieldWrapper.type()).toEqual(CardText);
        checkTranslation(fieldWrapper.childAt(0), 'boilerplate.organisms.SignInForm.noAccount', 'Don\'t have an account?');
      });
    });
  });
});
