function solution(arr) {
    var stk = [];
    
    var i = 0;
    while (i < arr.length) {
        if (stk.length === 0) {
            stk.push(arr[i]);
            i++;
            continue;
        }
        if (stk[stk.length - 1] === arr[i]) {
            stk.pop();
        } else {
            stk.push(arr[i]);
        }
        i++;
    }
    
    if (stk.length === 0) {
        return [-1];
    }
    
    return stk;
}