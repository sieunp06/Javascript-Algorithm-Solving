function solution(myString) {
    return myString.split('x').filter(text => text !== "").sort();
}