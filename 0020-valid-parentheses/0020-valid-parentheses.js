/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let arr = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (let i = 0; i < s.length; i++) {    //tc-O(n), sc-O(n)
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            arr.push(s[i]);
        } else {
            if (arr.length === 0 || arr.pop() !== map[s[i]]) {
                return false;
            }
        }
    }
    return arr.length === 0;
};