function solution(numbers) {
    var answer = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const num = numbers[i] + numbers[j];
            if (!answer.includes(num)) {
                answer.push(num);   
            }
        }
    }
    return answer.sort((a, b) => a - b);
}