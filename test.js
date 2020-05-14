const test = require("ava")
const lastItemIndex = require(".")

test("main", t => {
	t.is(lastItemIndex([]), undefined)
	t.is(lastItemIndex([1, 2, 3]), 2)
})
