function solution(nums) {
    const target = Math.floor(nums.length / 2);
    const pocket = new Set();
    
    for (const num of nums) {
        pocket.add(num);
    }
    
    return pocket.size > target ? target : pocket.size;
}