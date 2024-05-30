function solution(n) {
    const PIZZA = 7;
    
    if (n % PIZZA == 0) {
        return Math.floor(n / PIZZA);
    } 
    return Math.floor(n / PIZZA) + 1;
}