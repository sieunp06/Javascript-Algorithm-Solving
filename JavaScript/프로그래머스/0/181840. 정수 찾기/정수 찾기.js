function solution(num_list, n) {
    if (num_list.filter(num => num === n).length > 0) {
        return 1;
    }
    return 0;
}