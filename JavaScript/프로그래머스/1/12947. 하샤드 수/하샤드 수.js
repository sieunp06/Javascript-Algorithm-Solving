function solution(x) {
    if (x % sum(x) === 0) {
        return true;
    }
    return false;
}

function sum(x) {
    var sum = 0;
    for (const num of String(x).split("")) {
        sum += parseInt(num);
    }
    return sum;
}