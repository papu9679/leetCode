/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let n = nums2.length;
    let stack = [];
    let ans = new Array(n).fill(-1);

    for(let i = n - 1; i >= 0; i--){
        let curr = nums2[i];
        while(stack.length > 0 && curr >= stack[stack.length - 1]){
            stack.pop();
        }
        if(stack.length == 0){
            stack.push(curr);
        } else {
            ans[i] = stack[stack.length - 1];
            stack.push(curr);
        }
    }
    
    let result = [];
    for(let i = 0; i < nums1.length; i++){
        let idx = nums2.indexOf(nums1[i]);
        result[i] = ans[idx];
    }
    return result;
};