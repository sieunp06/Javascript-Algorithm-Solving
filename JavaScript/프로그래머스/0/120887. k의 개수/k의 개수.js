function solution(i, j, k) {
    var list = '';
    
    for (let index = i; index <= j; index++) {
        list += String(index);
    }
    
    const len = list.length;
    
    return len - list.replaceAll(k, '').length;
}