const context = require.context('./store', true, /reducer\.js$/);

export default context.keys().reduce((reducers, fileRelativePath) => Object.assign(reducers, {
  [fileRelativePath.replace('./', '').replace('/reducer.js', '')]: context(fileRelativePath).default,
}), {});
