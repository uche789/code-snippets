const {
  performance,
} = require('perf_hooks');

// space complexity o(n)
// time complexity: o(n)
function reverseStringSolution1(aString) {
  const length = aString.length - 1;
  let result = '';
  for (let i = length; i >= 0; i--) {
      result += aString.charAt(i);
  }
  return result;
}

// space complexity o(n)
// time complexity: o(3n) = o(n)
function reverseStringSolution2(aString) {
  const arr = aString.split('');
  arr.reverse();
  return arr.join('');
}

function reverseStringSolution3(aString) {
  if (aString.length === 0 || aString.length === 1) return aString += '';

  const lastIndex = aString.length - 1;
  return aString.charAt(lastIndex) + reverseStringSolution3(aString.substring(0, lastIndex));
}

function testSolution1(aString) {
  const t1 = performance.now()
  reverseStringSolution1(aString)
  const t2 = performance.now()
  console.log(`Solution 1: Completed in ${t2-t1}  milliseconds.`)
}

function testSolution2(aString) {
  const t1 = performance.now()
  reverseStringSolution2(aString)
  const t2 = performance.now()
  console.log(`Solution 2: Completed in ${t2-t1}  milliseconds.`)
}

/*
* WARNING: Will result in an error for long strings RangeError: Maximum call stack size exceeded because
* of the limitations of function calls you can place on to the call stack
*/
function testSolution3(aString) {
  const t1 = performance.now()
  reverseStringSolution3(aString)
  const t2 = performance.now()
  console.log(`Solution 3: Completed in ${t2-t1}  milliseconds.`)
}

function testShortString() {
  console.log('[Short string test] Starting....')
  const aString = 'Testing short strings';
  testSolution1(aString);
  testSolution2(aString);
  testSolution3(aString);
  console.log('[Short string test] End')
}

function testLongString() {
  const fs = require('fs')
  console.log('[Long string test] Starting....')
  fs.readFile('test-data-long-strings.txt', 'utf8', (err, data) => {
      testSolution1(data);
      testSolution2(data);
      console.log('Solution 3 will throw an exception: RangeError: Maximum call stack size exceeded')
      console.log('[Long string test] End.')
  })
}

(function main() {
  testShortString();
  testLongString();
})();