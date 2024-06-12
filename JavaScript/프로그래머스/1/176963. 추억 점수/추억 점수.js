function solution(name, yearning, photo) {
    var answer = [];
    
    const score = new Map();
    
    for (let i = 0; i < name.length; i++) {
        score.set(name[i], yearning[i]);
    }
    
    for (const each of photo) {
        var total = 0;
        for (const person of each) {
            if (score.has(person)) {
                total += score.get(person);   
            }
        }
        answer.push(total);
    }
    
    return answer;
}