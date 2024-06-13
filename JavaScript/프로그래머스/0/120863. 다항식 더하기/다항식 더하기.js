function solution(polynomial) {
    const list = new Array(2).fill(0);
    
    for (const poly of polynomial.split(' + ')) {
        if (poly.includes('x')) {
            const num = poly.substring(0, poly.length - 1);
            if (num === '') {
                list[0] += 1;
                continue;
            }
            list[0] += parseInt(num);
        } else {
            list[1] += parseInt(poly);
        }
    }
    
    var answer = '';
    
    if (list[0] === 0 && list[1] !== 0) {
        return String(list[1]);
    } else if (list[0] !== 0 && list[1] === 0) {
        if (list[0] === 1) {
            return 'x';
        }
        return String(list[0]) + 'x';
    }
    
    if (list[0] === 1) {
        return 'x + ' + list[1];
    }
    return list[0] + 'x + ' + list[1];
}