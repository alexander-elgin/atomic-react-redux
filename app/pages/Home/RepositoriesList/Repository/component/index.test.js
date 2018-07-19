import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FormattedNumber } from 'react-intl';

import Repository from './';

import IssueIcon from '../IssueIcon';
import IssuesLink from '../IssuesLink';
import RepositoryLink from '../RepositoryLink';

Enzyme.configure({ adapter: new Adapter() });

describe('<Repository />', () => {
  let component;

  const repository = {
    owner: {
      login: 'alexander-elgin',
    },
    html_url: 'https://github.com/alexander-elgin/ta-maxlength',
    name: 'ta-maxlength',
    open_issues_count: 3,
    full_name: 'alexander-elgin/ta-maxlength',
  };

  describe('current user\'s repository', () => {
    beforeEach(() => {
      component = shallow(<Repository repository={repository} currentUser={repository.owner.login} />);
    });

    it('renders a wrapper', () => expect(component.prop('className')).toEqual('wrapper'));

    describe('repository link', () => {
      let link;

      beforeEach(() => {
        link = component.find(RepositoryLink).first();
      });

      it('does not render the current username', () => {
        expect(link.childAt(0).text()).not.toContain(repository.owner.login);
      });

      it('renders the repository name', () => expect(link.childAt(0).text()).toBe(repository.name));
      it('refers to the repository URL', () => expect(link.prop('href')).toBe(repository.html_url));
      it('opens the link in a new tab', () => expect(link.prop('target')).toBe('_blank'));
    });

    describe('issues link', () => {
      let link;

      beforeEach(() => {
        link = component.find(IssuesLink).first();
      });

      it('refers to the repository issues URL', () => expect(link.prop('href')).toBe(`${repository.html_url}/issues`));
      it('opens the link in a new tab', () => expect(link.prop('target')).toBe('_blank'));

      describe('issues number', () => {
        let numberFormatter;

        beforeEach(() => {
          numberFormatter = link.childAt(1);
        });

        it('renders the issues number', () => expect(numberFormatter.prop('value')).toBe(repository.open_issues_count));
        it('formats the issues number', () => expect(numberFormatter.type()).toEqual(FormattedNumber));
      });

      describe('icon', () => {
        let icon;

        beforeEach(() => {
          icon = link.childAt(0);
        });

        it('renders the issue icon', () => expect(icon.type()).toEqual(IssueIcon));
        it('sets the icon className', () => expect(icon.prop('className')).toBe('icon'));
      });
    });
  });

  describe('another user\'s repository', () => {
    let link;

    beforeEach(() => {
      link = shallow(<Repository repository={repository} currentUser="another user" />).find(RepositoryLink).first();
    });

    it('renders the repository owner username', () => expect(link.childAt(0).text()).toContain(repository.owner.login));
    it('renders the repository full name', () => expect(link.childAt(0).text()).toBe(repository.full_name));
  });
});
