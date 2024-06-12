function solution(arr, delete_list) {
    var answer = [];
    
    for (let num of arr) {
        if (!delete_list.includes(num)) {
            answer.push(num);
        }
    }
    return answer;
}