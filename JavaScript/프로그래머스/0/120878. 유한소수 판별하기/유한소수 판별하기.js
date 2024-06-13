function solution(a, b) {
    const answer = [];
    const list = [];
    
    for (let i = 2; i <= a; i++) {
        if (a % i === 0) {
            while (a % i === 0) {
                a /= i;
                list.push(i);
            }
        }
    }
    
    for (const num of list) {
        if (b % num === 0) {
            b /= num;
        }
    }
    
    for (let i = 2; i <= b; i++) {
        if (b % i === 0) {
            while (b % i === 0) {
                b /= i;
            }
            answer.push(i);
        }
    }
    
    return answer.filter(num => num !== 2 && num !== 5).length === 0 ? 1 : 2;
}