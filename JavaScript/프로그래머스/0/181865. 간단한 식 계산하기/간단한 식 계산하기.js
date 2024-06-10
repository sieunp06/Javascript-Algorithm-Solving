function solution(binomial) {
    const list = binomial.split(" ");
    
    const num1 = parseInt(list[0]);
    const num2 = parseInt(list[2]);
    
    if (list[1] === "+") {
        return num1 + num2;
    }
    if (list[1] === "-") {
        return num1 - num2;
    }
    return num1 * num2;
}