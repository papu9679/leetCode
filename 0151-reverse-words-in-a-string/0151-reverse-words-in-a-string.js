/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let ans = s.split(' ').filter(x => x !== "");
    let result = []
    for(let i = 0; i < ans.length; i++){
        result.push(ans[i]);
    }
    return result.reverse().join(' ');
};

// the sky is blue
// [the, sky, is, blue]
