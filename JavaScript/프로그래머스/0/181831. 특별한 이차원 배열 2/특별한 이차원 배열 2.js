function solution(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            const num1 = arr[i][j];
            const num2 = arr[j][i];
            
            if (num1 !== num2) {
                return 0;
            }
        }
    }
    
    return 1;
}