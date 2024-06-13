function solution(array) {
    array.sort((a, b) => a - b);
    const list = new Array(array[array.length - 1] + 1).fill(0);
    
    for (const num of array) {
        list[num]++;
    }
    
    var max = 0;
    var idx = 0;
    for (let i = 0; i < list.length; i++) {
        if (max < list[i]) {
            max = list[i];
            idx = i;
        }
    }
    
    if (list.filter(num => num === max).length > 1) {
        return -1;
    }
    return idx;
}