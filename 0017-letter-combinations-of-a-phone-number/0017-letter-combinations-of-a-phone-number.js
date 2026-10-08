/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let two = ['a', 'b', 'c'];
    let three = ['d', 'e', 'f'];
    let four = ['g', 'h', 'i'];
    let five = ['j', 'k', 'l'];
    let six = ['m', 'n', 'o'];
    let seven = ['p', 'q', 'r', 's'];
    let eight = ['t', 'u', 'v'];
    let nine = ['w', 'x', 'y', 'z'];

     let map = {
        '2': two,
        '3': three,
        '4': four,
        '5': five,
        '6': six,
        '7': seven,
        '8': eight,
        '9': nine
    };

    let ans = [''];

    for (let i = 0; i < digits.length; i++) {
        let letters = map[digits[i]];
        let temp = [];

        for (let j = 0; j < ans.length; j++) {
            for (let k = 0; k < letters.length; k++) {
                temp.push(ans[j] + letters[k]);
            }
        }

        ans = temp;
    }

    return ans;
};