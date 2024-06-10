function solution(my_string, num1, num2) {
    const string = my_string.split("");
    const tmp = string[num1];
    string[num1] = string[num2];
    string[num2] = tmp;
    return string.join("");
}