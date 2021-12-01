import { isValidUrl, writeSearchParamsToArray } from './utils';

describe('writeSearchParamsToArray function', () => {
  test('returns empty array for empty or invalid input', () => {
    [
      new URLSearchParams(),
      null,
      undefined,
      [],
      'foo=bar',
      { foo: 'bar' }
    ].forEach((searchParams) => {
      const searchParamsArray = writeSearchParamsToArray(searchParams);
      expect(Array.isArray(searchParamsArray)).toBeTruthy();
      expect(searchParamsArray.length).toBe(0);
    });
  });

  test('returns array holding key value pair arrays for non-empty input', () => {
    const searchParamsArray = writeSearchParamsToArray(new URLSearchParams('foo=bar'));

    expect(Array.isArray(searchParamsArray)).toBeTruthy();
    expect(searchParamsArray.length).toBeGreaterThan(0);

    const firstParam = searchParamsArray[0];

    expect(typeof firstParam).toBe('object');
    expect(Array.isArray(firstParam)).toBeTruthy();
    expect(firstParam.length).toBe(2);
    expect(firstParam[0]).toBe('foo');
    expect(firstParam[1]).toBe('bar');
  });
});

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
