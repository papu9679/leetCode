/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        // Remove the element that is now outside the window
        if (i > k) {
            set.delete(nums[i - k - 1]);
        }

        // Check for duplicate in the current window
        if (set.has(nums[i])) {
            return true;
        }

        // Add the current element to the window
        set.add(nums[i]);
    }
    return false;
};