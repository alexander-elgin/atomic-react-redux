import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Link } from 'react-router-dom';

import { CardText } from '@material-ui/core/Card';
import { TextField } from 'redux-form-material-ui';
import { Field } from 'redux-form/immutable';
import Button from '@material-ui/core/Button';

import SignUpForm from './';

import Error from '../../../atoms/Error';
import { checkTranslation, getIntl } from '../../../utils/test';

Enzyme.configure({ adapter: new Adapter() });

describe('<SignUpForm />', () => {
  const error = 'ERROR';
  const spies = {};
  let form;

  beforeEach(() => {
    spies.handleSubmit = jest.fn((callback) => (data) => callback(data));
    spies.onSubmit = jest.fn();
    form = shallow(
      <SignUpForm handleSubmit={spies.handleSubmit} onSubmit={spies.onSubmit} intl={getIntl()} error={error} />
    );
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
      checkTranslation(header.childAt(0), 'boilerplate.shared.Auth.signUp', 'Sign up');
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
      describe('name', () => {
        beforeEach(() => {
          fieldWrapper = form.childAt(2);
          field = fieldWrapper.childAt(0);
        });

        it('renders the field', () => {
          expect(field.prop('floatingLabelText')).toBe('Name');
          expect(field.prop('name')).toBe('name');
          expect(field.prop('type')).toBe('text');
        });
      });

      describe('email', () => {
        beforeEach(() => {
          fieldWrapper = form.childAt(3);
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
          fieldWrapper = form.childAt(4);
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
        fieldWrapper = form.childAt(5);
        field = fieldWrapper.childAt(0);
      });

      it('renders the field', () => {
        expect(field.type()).toEqual(Button);
        expect(field.prop('label')).toBe('Sign up');
        expect(field.prop('type')).toBe('submit');
        expect(field.prop('variant')).toBe('contained');
      });

      afterEach(() => {
        expect(fieldWrapper.prop('className')).toBe('button-line');
      });
    });

    describe('link', () => {
      beforeEach(() => {
        fieldWrapper = form.childAt(6);
        field = fieldWrapper.find(Link).first();
      });

      it('renders the link', () => {
        expect(field.prop('to')).toBe('/signin');
        checkTranslation(field.childAt(0), 'boilerplate.shared.Auth.signIn', 'Sign in');
      });

      it('renders the link wrapper', () => {
        expect(fieldWrapper.type()).toEqual(CardText);
        checkTranslation(fieldWrapper.childAt(0), 'boilerplate.organisms.SignUpForm.alreadyHaveAccount',
          'Already have an account?');
      });
    });
  });
});
