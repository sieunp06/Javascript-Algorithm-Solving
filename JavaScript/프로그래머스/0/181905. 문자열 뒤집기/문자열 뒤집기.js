function solution(my_string, s, e) {
    const pre = my_string.substring(0, s);
    const pos = my_string.substring(e + 1, my_string.length);
    const target = my_string.substring(s, e + 1).split("").reverse().join("");
    return pre + target + pos;
}