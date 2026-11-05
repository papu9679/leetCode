/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const mp = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
    let total = 0;
    for(let i = 0; i < s.length; i++){
        if(mp[s[i]] < mp[s[i + 1]]){
            total -= mp[s[i]];
        } else {
            total += mp[s[i]];
        }
    }
    return total;
};