function solution(s) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for (let i = 0; i < numbers.length; i++) {
        s = s.replaceAll(numbers[i], i);
    }
    
    return parseInt(s);
}