const solution = (s) => {
    return makeDivisorList(s).reduce((pre, cur) => (pre + cur), 0);
}

const makeDivisorList = (targetNum) => {
    return makeRangeList(targetNum).filter(num => isDivisor(targetNum, num));
}

const makeRangeList = (targetNum) => {
    const rangeNums = [];
    for (let i = 1; i <= targetNum; i++) {
        rangeNums.push(i);
    }
    return rangeNums;
}

const isDivisor = (targetNum, divisorNum) => {
    if (targetNum % divisorNum === 0) {
        return true;
    }
    return false;
}