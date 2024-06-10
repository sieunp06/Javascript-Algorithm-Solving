function solution(x1, x2, x3, x4) {
    return intersection(union(x1, x2), union(x3, x4));
}

function union(bool1, bool2) {
    if (bool1 || bool2) {
        return true;
    }
    return false;
}

function intersection(bool1, bool2) {
    if (bool1 && bool2) {
        return true;
    }
    return false;
}