function solution(arr) {    
    var min = Number.MAX_VALUE;
    
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    
    var answer = arr.filter(num => num !== min);
    
    if (answer.length === 0) {
        answer.push(-1);
    }
    return answer;
}