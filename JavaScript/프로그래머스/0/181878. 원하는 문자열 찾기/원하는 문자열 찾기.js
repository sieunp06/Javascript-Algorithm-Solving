function solution(myString, pat) {
    if (myString.toUpperCase().includes(pat.toUpperCase())) {
        return 1;
    }
    return 0;
}