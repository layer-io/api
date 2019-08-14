# @layer.io/api
the api package for layer.io

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@layer.io/api)
* [gitlab.com (source)](https://gitlab.com/layer.io/api)
* [github.com (source mirror)](https://github.com/layer.io/api)
* [docs (typedoc)](https://layer.io.gitlab.io/api/)

## Status for master
[![build status](https://gitlab.com/layer.io/api/badges/master/build.svg)](https://gitlab.com/layer.io/api/commits/master)
[![coverage report](https://gitlab.com/layer.io/api/badges/master/coverage.svg)](https://gitlab.com/layer.io/api/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@layer.io/api.svg)](https://www.npmjs.com/package/@layer.io/api)
[![Known Vulnerabilities](https://snyk.io/test/npm/@layer.io/api/badge.svg)](https://snyk.io/test/npm/@layer.io/api)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

## Usage

This package implements all layer.io functionality in TypeScript.
It is meant to be easy to use without limiting functionality or performance of the layer.io platform for you.

```typescript
import * as lApi from '@layer.io/api'

/*
 * .createAccount creates an AccountInstance that exposes all API Layers for you.
 * Since it is all TypeScript, feel free to explore the package in your IDE.
 * The preferred IDE is VSCode.
 */
const lApiAccount = lapi.createAccount('your secret api key here');
```

More code examples and explanations can be found at https://docs.layer.io

## Support
There is community support available from our [layer.io spectrum.chat community](https://spectrum.chat/lossless/layer-io?tab=posts). In case you want dedicated premium support check out our premium supporr offerings at  [https://lossless.support](https://lossless.support)

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
