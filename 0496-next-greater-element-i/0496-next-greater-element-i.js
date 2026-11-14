/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let n = nums2.length;
    let stack = [];
    let mp = new Map();

    for (let i = n - 1; i >= 0; i--) {
        let curr = nums2[i];
        while (stack.length > 0 && curr >= stack[stack.length - 1]) {
            stack.pop();
        }
        if (stack.length == 0) {
            mp.set(curr, -1);
            stack.push(curr);
        } else {
            mp.set(curr, stack[stack.length - 1]);
            stack.push(curr);
        }
    }

    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        result[i] = mp.get(nums1[i]);
    }
    return result;
};