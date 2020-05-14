"use strict"

module.exports = array => {
	if (!Array.isArray(array)) {
		throw new TypeError(`Expected an array, got ${typeof array}`)
	}

	const arrayLength = array.length

	return arrayLength === 0 ? undefined : arrayLength - 1
}
