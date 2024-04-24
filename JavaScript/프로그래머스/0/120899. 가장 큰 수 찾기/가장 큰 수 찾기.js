function solution(array) {
    var answer = [];
    
    let max = -1;
    let maxIdx = -1;
    
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
            maxIdx = i;
        }
    }
    
    answer.push(max);
    answer.push(maxIdx);
    
    return answer;
}