function solution(num_list) {
    var odd = '';
    var even = '';
    
    for (const num of num_list) {
        if (num % 2 == 0) {
            even += num;
        } else {
            odd += num;
        }
    }
    return parseInt(odd) + parseInt(even);
}