function solution(numbers) {
    const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for (let i = 0; i < nums.length; i++) {
        numbers = numbers.replaceAll(nums[i], i);
    }
    
    return parseInt(numbers);
}