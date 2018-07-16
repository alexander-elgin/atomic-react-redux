const context = require.context('./state', true, /reducer\.js$/);
const reducers = {};

context.keys().forEach((fileRelativePath) => {
  reducers[fileRelativePath.replace('./', '').replace('/reducer.js', '')] = context(fileRelativePath).default;
});

export default reducers;
