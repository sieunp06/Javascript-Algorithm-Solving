function solution(numlist, n) {
    const list = [];
    
    for (const num of numlist) {
        list.push([num, Math.abs(n - num)]);
    }
    
    list.sort((n1, n2) => {
        if (n1[1] > n2[1]) return 1;
        if (n1[1] < n2[1]) return -1;
        return n1[0] > n2[0] ? -1 : 1;
    });
    
    return list.map(num => num[0]);
}