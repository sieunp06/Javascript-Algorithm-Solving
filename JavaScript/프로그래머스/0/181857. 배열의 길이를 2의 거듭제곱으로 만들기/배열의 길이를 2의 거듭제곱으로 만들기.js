function solution(arr) {
    var target = 0;
    while (Math.pow(2, target) < arr.length) {
        target++;
    }
    
    const answer = new Array(Math.pow(2, target)).fill(0);
    
    for (let i = 0; i < arr.length; i++) {
        answer[i] = arr[i];
    }
    
    return answer;
}