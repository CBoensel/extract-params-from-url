# extract-params-from-url

> cli extracting the parameters from an url string.

[![test](https://github.com/CBoensel/extract-params-from-url/actions/workflows/test.yml/badge.svg)](https://github.com/CBoensel/extract-params-from-url/actions/workflows/test.yml)

## Why

The purpose of this package is to support you analyze and deal with communication of url-encoded web services.

## Overview

The cli lists parameters attached to a url that is provided.

The script wraps around the Web APIs [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL_API) and [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams).

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
