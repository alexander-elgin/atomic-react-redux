import { addLocaleData } from 'react-intl';

const context = require.context('../translations', true, /\.json$/);

export default context.keys().reduce((acc, fileRelativePath) => {
  const langIso2Code = fileRelativePath.replace('./', '').replace('.json', '');
  addLocaleData(require(`react-intl/locale-data/${langIso2Code}`)); // eslint-disable-line global-require
  acc[langIso2Code] = context(fileRelativePath);
  return acc;
}, {});
