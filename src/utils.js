// eslint-disable-next-line import/extensions
import env from './config.js';

// globals
const { debug } = console;
const { nodeEnv } = env;

const writeSearchParamsToArray = (searchParams, verbose = false) => {
  const searchParamsArray = [];

  if (searchParams && searchParams instanceof URLSearchParams) {
    searchParams.forEach((value, key) => {
      searchParamsArray.push([key, value]);
      if (nodeEnv === 'development' || verbose) {
        // test output including potentially duplicated parameters
        debug(`url param > ${key}: ${value}`);
      }
    });
  } else {
    console.warn("wrong input arg definition for 'searchParams'");
  }

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

export { writeSearchParamsToArray, isValidUrl };
