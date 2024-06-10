function solution(num_list) {
    var answer = 0;
    
    for (const num of num_list) {
        var target = num;
        while (target > 1) {
            if (target % 2 === 0) {
                target /= 2;
            } else {
                target = (target - 1) / 2;
            }
            answer++;
        }
    }
    
    return answer;
}