function solution(numbers) {
    var len = numbers.length;
    numbers.sort((a, b) => a - b);
    var multiple = numbers[0] * numbers[1];
    var multiple2 = numbers[len -1] * numbers[len -2];
    return Math.max(multiple, multiple2);
}