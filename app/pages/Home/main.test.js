/**
 * Test the HomePage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import RepositoriesList from './RepositoriesList';
import { loadRepos } from '../../containers/App/actions';
import { HomePage, mapDispatchToProps } from './main';
import { changeUsername } from './actions';

describe('<Home />', () => {
  describe('rendering', () => {
    let component;

    beforeEach(() => {
      component = shallow(
        <HomePage loading error={false} repos={[]} />
      );
    });

    it('renders the repositories list', () => {
      expect(component.contains(<RepositoriesList loading error={false} repos={[]} />)).toBe(true);
    });

    it('renders the centered section', () => expect(component.find('.centered-section').length).toBe(1));
    it('renders the form', () => expect(component.find('.form').length).toBe(1));
    it('renders the section', () => expect(component.find('.section').length).toBe(1));
  });

  it('fetches the repositories list on mount if the username is set', () => {
    const submitSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <HomePage
          username="Not Empty"
          repos={[]}
          onChangeUsername={() => {}}
          onSubmitForm={submitSpy}
        />
      </IntlProvider>
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('does not fetch the repositories list on mount if the username is an empty string', () => {
    const submitSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <HomePage
          repos={[]}
          onChangeUsername={() => {}}
          onSubmitForm={submitSpy}
        />
      </IntlProvider>
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('does not fetch the repositories list on mount if the username is null', () => {
    const submitSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <HomePage
          username=""
          repos={[]}
          onChangeUsername={() => {}}
          onSubmitForm={submitSpy}
        />
      </IntlProvider>
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('#mapDispatchToProps', () => {
    describe('onChangeUsername', () => {
      it('is injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeUsername).toBeDefined();
      });

      it('dispatches changeUsername when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const username = 'mxstbr';
        result.onChangeUsername({ target: { value: username } });
        expect(dispatch).toHaveBeenCalledWith(changeUsername(username));
      });
    });

    describe('onSubmitForm', () => {
      it('is injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('dispatches loadRepos when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(loadRepos());
      });

      it('prevents execution of the default handler if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
