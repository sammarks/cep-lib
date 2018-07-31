![][header-image]

[![CircleCI][circleci-image]][circleci-url]
[![NPM version][npm-version]][npm-url]
[![NPM downloads][npm-downloads]][npm-url]
![License][license]
![Issues][issues]

`cep-lib` is a set of JS wrapper functions to aid in the development of CEP plugins.

## Get Started

```sh
npm install --save cep-lib
```

```js
import csInterface from 'cep-lib/csinterface'
import cep from 'cep-lib/cep'

const result = csInterface.evalScript('extendScriptFunction()')
console.log(result)

const rawCSInterface = csInterface.getCSInterface()

cep.deleteFile('/tmp/foo')
```

**Note:** It is not recommended to import the `cep-lib` root. If you do so, you will receive a warning message.
Each library has been packaged separately in order to allow developers to only import what they need.

## Features

- Provides a wrapper around the CSInterface library, while still providing access to the underlying library.
- Provides a wrapper around certain CEP-related functions (just some IO functions for now).

[header-image]: https://raw.githubusercontent.com/sammarks/art/master/cep-lib/header.jpg
[circleci-image]: https://img.shields.io/circleci/project/github/sammarks/cep-lib.svg
[circleci-url]: https://circleci.com/gh/sammarks/cep-lib/tree/master
[npm-version]: https://img.shields.io/npm/v/cep-lib.svg
[npm-downloads]: https://img.shields.io/npm/dm/cep-lib.svg
[npm-url]: https://www.npmjs.com/package/cep-lib
[license]: https://img.shields.io/github/license/sammarks/cep-lib.svg
[issues]: https://img.shields.io/github/issues/sammarks/cep-lib.svg
