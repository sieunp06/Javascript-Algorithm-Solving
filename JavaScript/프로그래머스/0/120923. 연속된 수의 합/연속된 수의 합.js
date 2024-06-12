function solution(num, total) {
    var answer = [];
    var start = 0; var end = start + num - 1;
    var sum = 0;
    
    for (let i = 0; i <= end; i++) {
        sum += i;
    }
    
    while (sum !== total) {
        if (sum < total) {
            sum -= start;
            start++; end++;
            sum += end;
        } else if (sum > total) {
            start--;
            sum += start;
            sum -= end;
            end--;
        }
    }
    
    for (let i = start; i <= end; i++) {
        answer.push(i);
    }
    
    return answer;
}