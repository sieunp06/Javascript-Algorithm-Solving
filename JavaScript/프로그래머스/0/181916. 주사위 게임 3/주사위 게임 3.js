function solution(a, b, c, d) {
    const number = [a, b, c, d].sort((a, b) => a - b);
    const map = new Map();
    
    for (const num of number) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);   
        }
    }
    
    if (map.size === 1) {
        return a * 1111;
    }
    if (map.size === 2) {
        if (number[0] !== number[1]) {
            return Math.pow(10 * number[1] + number[0], 2);
        }
        if (number[2] !== number[3]) {
            return Math.pow(10 * number[2] + number[3], 2);
        }
        return (number[0] + number[2]) * Math.abs(number[0] - number[2]);
    }
    if (map.size === 3) {
        let result = 1;
        for (const [key, value] of map.entries()) {
            if (value === 1) {
                result *= key;
            }
        }
        return result;
    }    
    return number[0];
}