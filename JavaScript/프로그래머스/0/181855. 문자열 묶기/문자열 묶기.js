function solution(strArr) {
    const map = new Map();
    
    for (const str of strArr) {
        const len = str.length;
        if (map.has(len)) {
            map.set(len, map.get(len) + 1);   
        } else {
            map.set(len, 1);   
        }
    }
    
    var max = -1;
    for (const [key, value] of map) {
        if (max < value) {
            max = value;
        }
    }
    
    return max;
}