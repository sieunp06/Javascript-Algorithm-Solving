const solution = (x) => {
    return x % calculateSum(x) === 0 ? true : false;
}

const calculateSum = (num) => {
    validateType(num, 'number');
    return String(num).split('').map(each => parseInt(each)).reduce((pre, cur) => pre + cur);
}

const validateType = (target, type) => {
    if (typeof target !== type) {
        throw new TypeError('wrong error');
    }
}