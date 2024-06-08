function solution(strArr) {
    const target = "ad";
    return strArr.filter(str => !str.includes(target));
}