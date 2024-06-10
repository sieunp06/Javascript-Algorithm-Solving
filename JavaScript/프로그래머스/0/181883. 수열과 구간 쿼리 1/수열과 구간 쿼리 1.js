function solution(arr, queries) {
    for (const query of queries) {
        const start = query[0];
        const end = query[1];
        
        for (let i = start; i <= end; i++) {
            arr[i]++;
        }
    }
     
    return arr;
}