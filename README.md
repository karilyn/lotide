# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @karilyn/lotide`

**Require it:**

`const _ = require('@karilyn/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function assertArraysEqual(actual, expected)`: console log success/failure if array results match expected
* `function assertEqual(actual, expected)`: console log success/failure if results match expected
* `function assertObjectsEqual(actual, expected)`: console log success/failure if object results match expected
* `function countLetters(str)`: return a count of each of the letters in a string
* `function countOnly(allItems, itemsToCount)`: return an object containing counts of everything that the input object listed
* `function eqArrays(array1, array2)`: compare two arrays for a perfect match,
* `function eqObjects(object1, object2)`: compare two objects based on a perfect match
* `function findKey(obect, callback)`: return the first key for which the callback returns truthy
* `function findKeyByValue(objectToSearch, value)`: return the first key which contains a given value.
* `function flatten(array)`: take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `function head(array)`: retrieve the first element in an array
* `function letterPositions(sentence)`: return all the indices in a string where each character is found
* `function map(array, callback)`: return a new array based on the results of the callback function
* `function middle(array)`: return the middle-most element(s) of a given array
* `function tail(array)`: return every element in an array after the head
* `function takeUntil(array, callback)`: return a slice of the array with elements taken from the beginning
* `function without(source, itemsToRemove)`: return a subset of a given array, removing unwanted elements