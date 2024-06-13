function solution(rank, attendance) {
    var answer = 0;
    const attend = [];
    
    for (let i = 0; i < rank.length; i++) {
        if (attendance[i]) {
            attend.push([i, rank[i]]);
        }
    }
    attend.sort((a, b) => {
        if (a[1] > b[1]) return 1;
        if (a[1] < b[1]) return -1;
    });
    
    return 10000 * attend[0][0] + 100 * attend[1][0] + attend[2][0];
}