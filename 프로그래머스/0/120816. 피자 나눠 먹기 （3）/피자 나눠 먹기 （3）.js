function solution(slice, n) {
    var answer = Math.floor(n / slice);
    if (n % slice == 0) {
        return answer;
    }
    return answer + 1;
}