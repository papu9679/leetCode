/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let ans = s.split(' ').filter(x => x !== "");
    let left = 0, right = ans.length - 1;
    while (left < right) {
        [ans[left], ans[right]] = [ans[right], ans[left]];
        left++;
        right--;
    }
    return ans.join(' ');
};

// the sky is blue
// [the, sky, is, blue]
