# extract-params-from-url

Util extracting the parameters from an url string.

This package was written to deal with url-encoded web services more easily.

## Overview

This project provides a wrapper around the Web APIs [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL_API) and [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) to more quickly resolve url parameters.

At this time, the util is only intended to be run in the command line. A JS module for development projects might follow at some point in the future.

## Installation

Ensure a recent version of [Node.js](https://nodejs.org/en/) is installed on your device. Then open your terminal and run:

```bash
$ npm i -g extract-params-from-url
```

## Usage

```bash
$ npx extract-params-from-url "your-url-or-parameter-chain"
```

## Example

```bash
$ npx extract-params-from-url "https://example.com?myarg1=myval1&myarg2=myval2"
```
