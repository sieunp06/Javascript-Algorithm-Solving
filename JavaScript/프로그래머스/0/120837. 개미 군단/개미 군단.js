function solution(hp) {    
    var answer = 0;
    
    const GENERAL = 5;
    const SODIER = 3;
    const WORK = 1;
    
    answer += Math.floor(hp / GENERAL);
    hp %= GENERAL;
    answer += Math.floor(hp / SODIER);
    hp %= SODIER;
    
    return answer + hp;
}