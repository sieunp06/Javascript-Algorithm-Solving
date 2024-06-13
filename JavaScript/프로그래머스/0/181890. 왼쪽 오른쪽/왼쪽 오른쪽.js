function solution(str_list) {
    var answer = [];
    
    const list = [findIdx(str_list, 'l'), findIdx(str_list, 'r')];
    
    if (list[0] === -1 && list[1] === -1) {
        return [];
    }
    
    if (minIdx(list[0], list[1]) === 0) {
        return str_list.slice(0, list[0]);
    }
    return str_list.slice(list[1] + 1, str_list.length);
}

function findIdx(str_list, letter) {
    return str_list.indexOf(letter);
}

function minIdx(idx1, idx2) {
    if (idx2 === -1) {
        return 0;
    }
    if (idx1 === -1) {
        return 1;
    }
    if (idx1 < idx2) {
        return 0;
    } else return 1;
}