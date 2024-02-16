function solution(dot) {
    var answer = 0;
    if (dot[1] > 0) {
        answer = 2;
        if (dot[0] > 0) {
            return answer - 1;
        }
    } else {
        answer = 4;
        if (dot[0] < 0) {
            return answer - 1;
        }
    }
    return answer;
}