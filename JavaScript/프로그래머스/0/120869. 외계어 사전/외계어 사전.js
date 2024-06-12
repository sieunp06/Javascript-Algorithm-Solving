function solution(spell, dic) {
    for (const alphabet of spell) {
        dic = dic.filter(text => text.includes(alphabet));
        if (dic.length === 0) {
            return 2;
        }
    }
    
    if (dic.length === 0) {
        return 2;
    }
    return 1;
}