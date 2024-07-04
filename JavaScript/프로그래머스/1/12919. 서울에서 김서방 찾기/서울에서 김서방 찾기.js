const solution = (seoul) => {
    const name = 'Kim';
    return makeResult(seoul.indexOf(name));
}

const makeResult = (index) => {
    return `김서방은 ${index}에 있다`;
}

const validateType = (target, type) => {
    if (typeof target !== type) {
        throw new TypeError('wrong error');
    }
}