function solution(numbers, direction) {
    const RIGHT = "right";
    
    if (direction === RIGHT) {
        numbers.unshift(numbers.pop());
    } else {
        numbers.push(numbers.shift());
    }
    return numbers;
}