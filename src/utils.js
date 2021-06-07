import env from './config.js';

const { nodeEnv } = env;

const writeSearchParamsToArray = (searchParams) => {
  const searchParamsArray = [];

  searchParams.forEach((value, key) => {
    searchParamsArray.push([key, value]);
    if (nodeEnv === 'development') {
      // test output including potentially duplicated parameters
      // todo make this dependant on param like "verbose" or so
      debug(`url param > ${key}: ${value}`);
    }
  });

  return searchParamsArray;
};

const isValidUrl = (string) => {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
};

export { isValidUrl, writeSearchParamsToArray };
