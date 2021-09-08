#!/usr/bin/env node

// packages
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import chalk from 'chalk';

// own
import { isValidUrl, writeSearchParamsToArray } from './src/utils';

// globals
const { log } = console;

/*
 * helpers
 */

const logParam = (value, key) => {
  log(`${key}: ${chalk.cyan(value)}`);
};

/*
 * main
 */

// get input
// const argv = yargs(hideBin(process.argv))
yargs(hideBin(process.argv))
  .scriptName('extract-params-from-url')
  .command(
    '$0',
    'the default command',
    () => {},
    (argv) => {
      const { _, verbose } = argv;
      let { url, params } = argv;
      const string = _?.pop();
      let searchParams;
      if (string && isValidUrl(string)) {
        url = string;
      }
      else if (string) {
        params = string;
      }

      // transform input strings to web api objects
      if (url) {
        const urlInstance = new URL(url);
        const { protocol, host, pathname } = urlInstance;

        // plot the access point of the web service
        const webServiceUrl = `${protocol}//${host}${pathname}`;
        log(`web service url: ${chalk.cyan(webServiceUrl)}`);

        searchParams = urlInstance.searchParams;
      }
      else if (params) {
        searchParams = new URLSearchParams(params);
        log('no web service url passed. processing raw params');
      }
      else {
        throw new Error('no input param passed');
      }

      // get the url-encoded params in a more structured, raw format
      searchParams.sort();
      const searchParamsArray = writeSearchParamsToArray(searchParams, verbose);
      const searchParamsMap = new Map(searchParamsArray);

      // identify duplicates
      const duplicatesNum = searchParamsArray.length - searchParamsMap.size;
      if (duplicatesNum) {
        const logString = `${duplicatesNum} duplicates found for given input`;
        log(`${chalk.red(logString)}`);
      }
      else {
        log(`${chalk.green('No duplicates found for given input')}`);
      }

      // print
      searchParamsMap.forEach(logParam);
      log('\n');
    }
  )
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
  })
  .option('url', {
    alias: 'u',
    type: 'string',
    description: 'Parse from url'
  })
  .option('params', {
    alias: 'p',
    type: 'string',
    description: 'Parse from params'
  }).argv;
