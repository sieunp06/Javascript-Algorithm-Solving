function solution(my_string) {
    const alphabet = my_string.toLowerCase().split("");
    return alphabet.sort().join("");
}