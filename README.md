# extract-params-from-url

Util extracting the parameters from an url string.

The purpose of this package is to analyze and deal with communication of url-encoded web services.

## Overview

The cli resolves and lists parameters attached to a url.

The actual code wraps around the Web APIs [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL_API) and [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams).

At this time, the util is only intended to be run in the command line.

## Installation

Ensure a recent [Node.js](https://nodejs.org/en/) version being installed first.

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
