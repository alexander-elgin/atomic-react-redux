const context = require.context('./state', true, /saga\.js$/);
const sagas = [];
context.keys().forEach((fileRelativePath) => sagas.push(context(fileRelativePath).default));

export default sagas;
