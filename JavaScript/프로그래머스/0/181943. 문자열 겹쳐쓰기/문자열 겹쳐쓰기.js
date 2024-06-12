function solution(my_string, overwrite_string, s) {
    const pre = my_string.substring(0, s);
    const pos = my_string.substring(s + overwrite_string.length, my_string.length);
    return pre + overwrite_string + pos;
}