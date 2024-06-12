function solution(n, arr1, arr2) {
    var answer = [];
    
    for (let i = 0; i < n; i++) {
        var line = '';
        const one = matchLen(arr1[i].toString(2), n);
        const two = matchLen(arr2[i].toString(2), n);
        
        for (let j = 0; j < n; j++) {
            if (one[j] === '1' || two[j] === '1') {
                line += '#';
                continue;
            } 
            line += ' ';
        }
        answer.push(line);
    }
    return answer;
}

function matchLen(line, n) {
    if (line.length < n) {
        return '0'.repeat(n - line.length) + line;
    }
    return line;
}