function solution(arr, k) {
    const answer = new Array(k).fill(-1);
    const set = new Set();
    
    for (let i = 0; i < arr.length; i++) {
        if (!set.has(arr[i])) {
            set.add(arr[i]);
            answer[set.size - 1] = arr[i];
        }
        
        if (set.size === k) {
            break;
        }
    }
    
    return answer;
}