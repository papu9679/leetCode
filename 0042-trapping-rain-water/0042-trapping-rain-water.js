/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(height) {
    const n = height.length;

    function findPrefixMax(arr, n) {
        const prefixMax = new Array(n);
        prefixMax[0] = arr[0];

        for (let i = 1; i < n; i++) {
            prefixMax[i] = Math.max(prefixMax[i - 1], arr[i]);
        }

        return prefixMax;
    }

    function findSuffixMax(arr, n) {
        const suffixMax = new Array(n);
        suffixMax[n - 1] = arr[n - 1];

        for (let i = n - 2; i >= 0; i--) {
            suffixMax[i] = Math.max(suffixMax[i + 1], arr[i]);
        }

        return suffixMax;
    }

    const leftMax = findPrefixMax(height, n);
    const rightMax = findSuffixMax(height, n);

    let total = 0;

    for (let i = 0; i < n; i++) {
        total += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return total;
};
