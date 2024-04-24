function solution(arr, n) {
    let num = 0;
    if (arr.length % 2 == 0) {
        num = 1;
    }
    
    for (let i = num; i < arr.length; i += 2) {
        arr[i] += n;
    }
    return arr;
}