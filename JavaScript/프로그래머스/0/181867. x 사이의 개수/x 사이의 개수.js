function solution(myString) {
    var answer = myString.split('x');
    return answer.map(str => str.length);
}