function solution(s) {
    return checkLength(s) && checkNumber(s);
}

function checkLength(s) {
    if (s.length === 4 || s.length === 6) {
        return true;
    }
    return false;
}

function checkNumber(s) {
    if (s.replaceAll(/[0-9]/g, "").length === 0) {
        return true;
    }
    return false;
}