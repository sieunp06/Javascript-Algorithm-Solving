const score = [];

const solution = (dartResult) => {
    let defaultScore = '';
    for (let i = 0; i < dartResult.length; i++) {
        const cur = dartResult[i];
        
        if (isNumber(cur)) {
            defaultScore += cur;
            continue;
        }
        putDefaultScore(defaultScore);
        adaptBonus(cur);
        adaptOption(cur);
        
        defaultScore = '';
    }
    
    return score.reduce((pre, cur) => pre + cur);
}

const putDefaultScore = (score) => {
    if (isNumber(score)) {
        pushDefaultScore(parseInt(score));   
    }
}

const adaptBonus = (bonus) => {
    if (bonus === 'D') {
        score.push(Math.pow(score.pop(), 2));
    }
    if (bonus === 'T') {
        score.push(Math.pow(score.pop(), 3));
    }
}

const adaptOption = (option) => {
    if (option === '*') {
        if (score.length >= 2) {
            score[score.length - 2] = score[score.length - 2] * 2;   
        }
        score[score.length - 1] = score[score.length - 1] * 2;
    }
    if (option === '#') {
        score[score.length - 1] = score[score.length - 1] * -1;
    }
}

const pushDefaultScore = (defaultScore) => {
    score.push(defaultScore);
}

const isNumber = (alpha) => {
    return !isNaN(parseInt(alpha)) ? true : false;
}