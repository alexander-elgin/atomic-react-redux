import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from '../../../atoms/A';
import LocaleToggle from '../../../../containers/LocaleToggle';

import Wrapper from '../Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage {...messages.licenseMessage} />
      </section>
      <section>
        <LocaleToggle />
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
