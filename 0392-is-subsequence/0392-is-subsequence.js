/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = 0; // s
    let j = 0; // t
    let n = s.length;
    let m = t.length;

    while (i < n && j < m) {
        if (s[i] == t[j]) {
            i++;
            j++;
        }
        else {
            j++;
        }
    }

    if (i == n) {
        // we've completed string s
        return true;
    }
    return false;
};