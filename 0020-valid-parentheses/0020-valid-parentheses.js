/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let st = [];
    let map = { ')': '(', '}': '{', ']': '[' };

    for (let ch of s) {
        if (ch in map) {
            if (st.pop() !== map[ch]) return false;
        } else {
            st.push(ch);
        }
    }

    return st.length === 0;
};