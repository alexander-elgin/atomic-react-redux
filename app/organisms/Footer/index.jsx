import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import A from '../../atoms/A';
import LocaleSwitcher from '../LocaleSwitcher';

import messages from './messages';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
  padding: 2em 0;
`;

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage {...messages.licenseMessage} />
      </section>
      <section>
        <LocaleSwitcher />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://github.com/alexander-elgin">Alex Elgin</A>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
