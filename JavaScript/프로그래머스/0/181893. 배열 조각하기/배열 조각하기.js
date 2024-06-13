function solution(arr, query) {
    for (let i = 0; i < query.length; i++) {
        const num = query[i];
        if (i % 2 === 0) {
            arr = arr.slice(0, num + 1);
            continue;
        } 
        arr = arr.slice(num, arr.length);
    }
    return arr;
}