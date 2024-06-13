function solution(arr) {
    var list = arr.slice();
    
    var maxCount = 0;
    for (let i = 0; i < list.length; i++) {
        var count = 0;
        while (true) {
            if (arr[i] >= 50 && arr[i] % 2 === 0) {
                arr[i] /= 2;
                count++;
                continue;
            }
            if (arr[i] < 50 && arr[i] % 2 !== 0) {
                arr[i] = arr[i] * 2 + 1;
                count++;
                continue;
            }
            break;
        }
        if (maxCount < count) {
            maxCount = count;
        }
    }
    
    return maxCount;
}