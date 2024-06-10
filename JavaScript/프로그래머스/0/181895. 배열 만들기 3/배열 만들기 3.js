function solution(arr, intervals) {
    var answer = [];
    
    for (const interval of intervals) {
        const start = interval[0];
        const end = interval[1] + 1;
        answer = answer.concat(arr.slice(start, end));
    }
    
    return answer;
}