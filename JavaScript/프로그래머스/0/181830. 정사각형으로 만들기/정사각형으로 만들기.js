function solution(arr) {
    const max = Math.max(arr.length, arr[0].length);
    const list = new Array(max);
    for (let i = 0; i < list.length; i++) {
        list[i] = new Array(max).fill(0);
    }
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0 ; j < arr[i].length; j++) {
            list[i][j] = arr[i][j];
        }
    }
    
    return list;
}