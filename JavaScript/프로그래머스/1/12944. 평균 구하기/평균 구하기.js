const solution = (arr) => {
    validateType(arr, 'object');
    return arr.reduce((pre, cur) => pre + cur, 0) / arr.length;
}

const validateType = (target, type) => {
    if (typeof target !== type) {
        throw new TypeError('wrong type');
    }
}