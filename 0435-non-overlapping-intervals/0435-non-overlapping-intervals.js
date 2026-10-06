/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (arr) {
    arr.sort((a, b) => a[0] - b[0]);

    let n = arr.length;

    // last meeting will happen 100%
    let start = arr[n - 1][0];
    let cnt = 1;

    for (let i = n - 2; i >= 0; i--) {
        let end = arr[i][1];
        if (end <= start) {
            cnt++;
            start = arr[i][0];
        }
    }

    let ans = n - cnt;
    return ans;
};