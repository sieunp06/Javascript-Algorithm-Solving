function solution(N, stages) {
    var answer = [];
    const stageList = new Array(N + 1).fill(0);
    const failList = new Array(N);
    var total = 0;
    
    for (const stage of stages) {
        stageList[stage - 1]++;
        total++;
    }
    
    for (let i = 0; i < N; i++) {
        failList[i] = [i + 1, stageList[i] / total];
        total -= stageList[i];
    }
    
    failList.sort((f1, f2) => {
        if (f1[1] < f2[1]) return 1;
        if (f1[1] > f2[1]) return -1;
        return f1[0] < f1[0] ? -1 : 1;
    });
    
    for (const fail of failList) {
        answer.push(fail[0]);
    }
    
    return answer;
}