function solution(array, n) {
    array.sort((a, b) => a - b);
    
    var minGap = n;
    var target = array[0];
    for (const num of array) {
        if (minGap > Math.abs(num - n)) {
            minGap = Math.abs(num - n);
            target = num;
        }
    }
    
    return target;
}