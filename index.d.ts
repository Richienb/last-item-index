/**
Get the index of the last item in an array.
@param array The array to get the index for.
@example
```
const lastItemIndex = require("last-item-index")

lastItemIndex([1, 2, 3]);
//=> 2

lastItemIndex([]);
//=> undefined
```
*/
declare function lastItemIndex(array: []): undefined
declare function lastItemIndex(array: any[]): number

export = lastItemIndex
