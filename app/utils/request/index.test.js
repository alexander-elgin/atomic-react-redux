import { get, post, put, remove } from './';

jest.mock('./base', () => ({
  extractJson: (responseData) => {
    const result = responseData;
    result.jsonExtracted = true;
    return result;
  },
  submitRequest: (url, method, headers, payload) => ({ url, method, headers, payload }),
}));

const checkRequest = (requestName, request, method, headers, path, customBaseUrl, payload, emptyPayload, finalPath) => {
  describe(`#${requestName}`, () => {
    describe('custom base URL with payload', () => {
      it(`extracts JSON from a response of the ${method} request`, () => {
        expect(request(path, payload, customBaseUrl)).toEqual({
          url: customBaseUrl + (finalPath === undefined ? path : finalPath),
          method,
          headers,
          payload: (emptyPayload ? undefined : payload),
          jsonExtracted: true,
        });
      });
    });
  });
};

const path = '/users';

checkRequest('get', get, 'GET', true, path, 'https//github.com', { type: 'all' }, true, `${path}?type=all`);
checkRequest('post', post, 'POST', true, '/users', 'https//linkedin.com', { gender: 'male' });
checkRequest('put', put, 'PUT', true, '/users/2', 'https//facebook.com', { name: 'Alex' });
checkRequest('remove', remove, 'DELETE', false, '/users/3', 'https//yahoo.com', { id: '123' });
