function solution(chicken) {
    var answer = 0;
    
    var coupon = 0;
    while (chicken / 10 >= 1) {
        coupon = Math.floor(chicken / 10);
        chicken = chicken % 10 + coupon;
        answer += coupon;
    }
    
    return answer;
}