function solution(food) {
    var left = '';
    
    for (let i = 1; i < food.length; i++) {
        left += String(i).repeat(food[i] / 2);
    }
    
    return left + '0' + left.split('').reverse().join('');
}