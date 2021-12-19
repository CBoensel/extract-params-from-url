# extract-params-from-url

> cli extracting the parameters from an url string.

[![test](https://github.com/CBoensel/extract-params-from-url/actions/workflows/test.yml/badge.svg)](https://github.com/CBoensel/extract-params-from-url/actions/workflows/test.yml)
[![npm version](https://img.shields.io/npm/v/extract-params-from-url.svg)](https://npmjs.com/package/extract-params-from-url)

## Overview

The cli prints parameters attached to a url as a list.

It comes in handy when to inspect communication of url-encoded web services.

The code wraps around the Web APIs [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL_API) and [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams).

## Installation

Ensure a recent [Node.js](https://nodejs.org/en/) version being installed first.

```bash
npm i -g extract-params-from-url
```

## Usage

```bash
npx extract-params-from-url "your-url-or-parameter-chain"
```

## Example

```bash
npx extract-params-from-url "https://example.com?myarg1=myval1&myarg2=myval2"
```

web service url: <span style="color:blue">https://example.com/</span>\
<span style="color:green">no duplicates found for given input</span>\
myarg1: <span style="color:blue">myval1</span>\
myarg2: <span style="color:blue">myval2</span>
