const solution = (n) => {
    return makeNumList(String(n)).reduce((pre, cur) => pre + cur, 0);
}

const makeNumList = (numText) => {
    if (typeof numText !== 'string') {
        throw new TypeError('wrong type');
    }
    return numText.split('').map(alpha => parseInt(alpha));
}