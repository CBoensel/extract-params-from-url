import env from './config';

// globals
const { debug } = console;

const { nodeEnv } = env;

const writeSearchParamsToArray = (searchParams, verbose) => {
  const searchParamsArray = [];

  searchParams.forEach((value, key) => {
    searchParamsArray.push([key, value]);
    if (nodeEnv === 'development' || verbose) {
      // test output including potentially duplicated parameters
      debug(`url param > ${key}: ${value}`);
    }
  });

  return searchParamsArray;
};

const isValidUrl = (string) => {
  let url;

  try {
    url = new URL(string);
  }
  catch (_) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
};

export { isValidUrl, writeSearchParamsToArray };
