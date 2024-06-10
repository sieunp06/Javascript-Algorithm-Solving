function solution(myString, pat) {
    const targetIdx = myString.lastIndexOf(pat);
    return myString.substring(0, targetIdx) + pat;
}