const {
    performance,
} = require('perf_hooks');


// time complexity: o(n)
// space complexity: o(1) 
function sumSolution1(arr) {
    return arr.reduce((sum, current) => {
        return sum + current;
    })
}

// time complexity: o(n)
// space complexity: o(1) 
function sumSolution2(arr) {
    const length = arr.length;
    let sum = 0;

    for (let i = 0; i < length; i++) {
        sum += arr[i];
    }

    return sum;
}

function testPerformance(data, solutionName, callback) {
    const t1 = performance.now()
    console.log(callback(data));
    const t2 = performance.now()
    console.log(`${solutionName}: Completed in ${t2-t1}  milliseconds.`)
}

function testSmallArray() {
    console.log('[Small array test] Starting....')
    const arr = [1,2,3,4,5,6,7,8]
    testPerformance(arr, 'Solution1', sumSolution1)
    testPerformance(arr, 'Solution2', sumSolution2)
    console.log('[Small array test] End.')
}

function testLargeArray() {
    const fs = require('fs')
    console.log('[Large array test] Starting....')
    fs.readFile('test-data-long-numbers.txt', 'utf8', (err, data) => {
        const arr = [...data].map(x => Number(x));
        testPerformance(arr, 'Solution1', sumSolution1)
        testPerformance(arr, 'Solution2', sumSolution2)
        console.log('[Large array test] End.')
    })
}

(function main() {
    testSmallArray();
    testLargeArray();
})();

