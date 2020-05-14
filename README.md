# last-item-index [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/last-item-index/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/last-item-index)

Get the index of the last item in an array.

[![NPM Badge](https://nodei.co/npm/last-item-index.png)](https://npmjs.com/package/last-item-index)

## Install

```sh
npm install last-item-index
```

## Usage

```js
const lastItemIndex = require("last-item-index")

lastItemIndex([1, 2, 3]);
//=> 2

lastItemIndex([]);
//=> undefined
```

## API

### lastItemIndex(array)

#### array

Type: `array`

The array to get the index for.
