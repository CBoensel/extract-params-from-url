#!/usr/bin/env node

// packages
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import chalk from 'chalk';

// own
import env from './src/config.js';

// globals
const { nodeEnv } = env;
const { log, debug } = console;

// helpers
const writeSearchParamsToArray = (searchParams) => {
  const searchParamsArray = [];

  searchParams.forEach((value, key) => {
    searchParamsArray.push([key, value]);
    if (nodeEnv === 'development') {
      // test output including potentially duplicated parameters
      debug(`url param > ${key}: ${value}`);
    }
  });

  return searchParamsArray;
};

const logParam = (value, key) => {
  log(`${key}: ${chalk.cyan(value)}`);
};

// get input
const argv = yargs(hideBin(process.argv)).argv;
const { url, params } = argv;
let searchParams;

// transform input strings to web api objects
if (url) {
  const urlInstance = new URL(url);
  const { protocol, host, pathname } = urlInstance;

  // plot the access point of the web service
  const webServiceUrl = `${protocol}//${host}${pathname}`;
  log(`web service url: ${chalk.cyan(webServiceUrl)}`);

  searchParams = urlInstance.searchParams;
} else if (params) {
  searchParams = new URLSearchParams(params);
  log(`no web service url passed. processing raw params`);
} else {
  throw new Error('no input param passed');
}

// get the url-encoded params in a more structured, raw format
searchParams.sort();
const searchParamsArray = writeSearchParamsToArray(searchParams);
const searchParamsMap = new Map(searchParamsArray);

// identify duplicates
const duplicatesNum = searchParamsArray.length - searchParamsMap.size;
if (duplicatesNum) {
  const logString = `${duplicatesNum} duplicates found for given input`;
  log(`${chalk.red(logString)}`);
} else {
  log(`${chalk.green('No duplicates found for given input')}`);
}

// print
searchParamsMap.forEach(logParam);
