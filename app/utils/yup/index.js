import { setLocale } from 'yup';

const context = require.context('../../translations', true, /\.js$/);

const serializedLocales = JSON.stringify(context.keys().reduce((locales, fileRelativePath) => Object.assign(locales, {
  [fileRelativePath.replace('./', '').replace('.js', '')]: context(fileRelativePath).default,
}), {}));

// setLocale modifies the argument. That's the only way I found to fix the issue
const setYupLocale = (langIso2Code) => setLocale(JSON.parse(serializedLocales)[langIso2Code]);
export default setYupLocale;
