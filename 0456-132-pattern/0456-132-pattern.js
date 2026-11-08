/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    let st = [];

    let thirdValue = -Infinity;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < thirdValue) {
            return true;
        }

        while (st.length > 0 && nums[i] > st[st.length - 1]) {
            thirdValue = st[st.length - 1];
            st.pop();
        }

        st.push(nums[i]);
    }

    return false;
};