function solution(cards1, cards2, goal) {
    var idx1 = 0;
    var idx2 = 0;
    
    for (let i = 0; i < goal.length; i++) {
        if (goal[i] === cards1[idx1]) {
            idx1++;
            continue;
        } 
        if (goal[i] === cards2[idx2]) {
            idx2++;
            continue;
        }
        return "No";
        
    }
    return "Yes";
}