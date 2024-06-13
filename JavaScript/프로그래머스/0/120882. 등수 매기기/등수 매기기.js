function solution(score) {
    var answer = [];
    
    const avgList = [];
    for (const [eng, math] of score) {
        avgList.push([avgList.length + 1, (eng + math) / 2]);
    }
    
    avgList.sort((s1, s2) => {
        if (s1[1] < s2[1]) return 1;
        if (s1[1] > s2[1]) return -1;
    });
    
    var rank = 1;
    var count = 0;
    var pre = avgList[0][1];
    answer.push([avgList[0][0], rank]);
    
    for (let i = 1; i < avgList.length; i++) {
        if (avgList[i][1] === pre) {
            answer.push([avgList[i][0], rank]);
            count++;
        } else {
            rank = rank + count + 1;
            answer.push([avgList[i][0], rank]);
            pre = avgList[i][1];
            count = 0;
        }
    }
    
    return answer.sort((s1, s2) => {
        if (s1[0] < s2[0]) return -1;
        if (s1[0] > s2[0]) return 1;
    }).map(s => s[1]);
}