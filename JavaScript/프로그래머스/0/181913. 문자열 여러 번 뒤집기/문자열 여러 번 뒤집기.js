function solution(my_string, queries) {
    for (const query of queries) {
        const i = query[0];
        const j = query[1];
        
        const pre = my_string.substring(0, i);
        const target = my_string.substring(i, j + 1).split('').reverse().join('');
        const pos = my_string.substring(j + 1, my_string.length);
        my_string = pre + target + pos;
    }
    
    return my_string;
}