/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(h) {
    let n = h.length;
    let left = new Array(n);
    
    left[0] = h[0];
    for(let i=1; i<n; i++){
        left[i] = Math.max(left[i-1], h[i]);
    }

    let right = new Array(n);
    right[n-1] = h[n-1];
    for(let i=n-2; i>=0; i--){
        right[i] = Math.max(right[i+1], h[i]);
    }

    let water = 0;
    for(let i=0; i<n; i++){
        water += (Math.min(left[i], right[i]) - h[i]);
    }

    return water;
};