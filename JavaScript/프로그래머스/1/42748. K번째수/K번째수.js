function solution(array, commands) {
    var answer = [];
    
    for (const command of commands) {
        const i = command[0] - 1;
        const j = command[1];
        const k = command[2] - 1;
        
        const sliced = array.slice(i, j).sort((a, b) => a - b);
        answer.push(sliced[k])
    }
    
    return answer;
}