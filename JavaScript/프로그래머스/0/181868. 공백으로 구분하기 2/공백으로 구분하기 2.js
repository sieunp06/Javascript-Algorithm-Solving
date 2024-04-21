function solution(my_string) {
    var answer = my_string.split(' ').filter(i => i !== '');
    return answer;
}