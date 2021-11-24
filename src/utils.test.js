// import { writeSearchParamsToArray, isValidUrl } from './utils';
import { isValidUrl } from './utils';

// describe('writeSearchParamsToArray function', () => {
//   test('todo', () => {});
// });

describe('isValidUrl function', () => {
  test('returns false for non-string input arguments', () => {
    [
      null,
      1,
      undefined,
      { foo: 'bar' }
    ].forEach((el) => {
      expect(isValidUrl(el)).toBeFalsy();
    });
  });
  test('returns false for invalid url strings', () => {
    [
      'foobar',
      'example.com',
      '?hello=world&foo=bar'
    ].forEach((el) => {
      expect(isValidUrl(el)).toBeFalsy();
    });
  });
  test('returns true for valid url strings', () => {
    [
      'http://example.com',
      'https://example.com',
      'https://example.com?hello=world&foo=bar'
    ].forEach((el) => {
      expect(isValidUrl(el)).toBeTruthy();
    });
  });
});
