function solution(answers) {
    var answer = [];
    const student = ['1, 2, 3, 4, 5', '2, 1, 2, 3, 2, 4, 2, 5', '3, 3, 1, 1, 2, 2, 4, 4, 5, 5,'];
    const score = [];
    
    for (let i = 0; i < student.length; i++) {
        const list = student[i].split(', ');
        var total = 0;
        for (let j = 0; j < answers.length; j++) {
            if (parseInt(list[j % list.length]) === answers[j]) {
                total++;
            }
        }
        score.push(total);
    }
    
    var max = -1;
    for (const num of score) {
        if (max < num) {
            max = num;
        }
    }
    
    for (let i = 0; i < student.length; i++) {
        if (score[i] === max) {
            answer.push(i + 1);
        }
    }
    
    return answer;
}