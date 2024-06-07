function solution(my_string, is_prefix) {
    const len = is_prefix.length;
    if (my_string.substring(0, len) === is_prefix) {
        return 1;
    } 
    return 0;
}