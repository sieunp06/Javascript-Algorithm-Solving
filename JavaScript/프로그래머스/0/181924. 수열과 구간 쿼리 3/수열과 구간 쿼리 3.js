function solution(arr, queries) {
    for (const query of queries) {
        const i = query[0];
        const j = query[1];
        
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    
    return arr;
}