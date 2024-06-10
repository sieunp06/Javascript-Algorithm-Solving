function solution(arr) {
    var answer = arr.reduce((acc, cur) => {
        return acc + cur;
    });
    return answer / arr.length;
}