function solution(arr, queries) {
    for (const query of queries) {
        const s = query[0];
        const e = query[1];
        const k = query[2];
        
        for (let i = s; i <= e; i++) {
            if (i % k === 0) {
                arr[i]++;
            }
        }
    }
    
    return arr;
}