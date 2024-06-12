function solution(k, score) {
    var answer = [];
    const queue = [];
    
    for (const num of score) {
        queue.push(num);
        queue.sort((a, b) => b - a);
        while (queue.length > k) {
            queue.pop();
        }
        answer.push(queue[queue.length - 1]);
    }
    
    return answer;
}