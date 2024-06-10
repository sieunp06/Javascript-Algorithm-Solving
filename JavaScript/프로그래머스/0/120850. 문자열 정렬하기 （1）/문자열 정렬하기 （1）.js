function solution(my_string) {
    return my_string.replaceAll(/[a-z|A-Z]/g, "").split("").map(num => {
        return parseInt(num);
    }).sort((a, b) => a - b);
}