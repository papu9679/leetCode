/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let n = nums.length - 1;
    let dropPoint = -1;
    // 1. find the dropPoint idx[just drop from right] break;
    for (let i = n; i > 0; i--) {
        if (nums[i - 1] < nums[i]) {
            dropPoint = i - 1 ;
            break;
        }
    }
    console.log('dropPoint', dropPoint);

    // 2. if idx = -1 {reverse entire array}
    if (dropPoint == -1) {
        nums.reverse();
        return;
    }

    // 3. if pivotIdx != -1 [find just greater from right] break;
    let max = -1;
    for (let i = n; i > dropPoint; i--) {
        if (nums[dropPoint] < nums[i]) {
            max = nums[i];
            [nums[dropPoint], nums[i]] = [nums[i], nums[dropPoint]]
            break;
        }
    }
    console.log(max);

    // 4. then reverse (idx + 1) to (n - 1);
    let left = dropPoint + 1;
    let right = n;
    while(left < right){
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};