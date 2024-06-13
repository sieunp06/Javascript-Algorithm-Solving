function solution(arr, queries) {
    var answer = [];
    
    for (const query of queries) {
        const s = query[0];
        const e = query[1];
        const k = query[2];
        
        const sliced = arr.slice(s, e + 1).filter(num => num > k).sort((a, b) => a - b);
        
        if (sliced.length === 0) {
            answer.push(-1);
            continue;
        }
        answer.push(sliced[0]);
    }
    return answer;
}