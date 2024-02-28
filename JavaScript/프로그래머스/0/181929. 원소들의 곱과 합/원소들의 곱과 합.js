function solution(num_list) {
    var add = num_list.reduce((pre, curr, curl, arr) => (pre + curr), 0);
    var mul = num_list.reduce((pre, curr, curl, arr) => (pre * curr), 1);
    
    if (Math.pow(add, 2) < mul) {
        return 0;
    }
    return 1;
}