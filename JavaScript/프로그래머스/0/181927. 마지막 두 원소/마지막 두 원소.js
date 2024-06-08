function solution(num_list) {
    const LAST_NUM = num_list[num_list.length - 1];
    const PRE_LAST_NUM = num_list[num_list.length - 2];
    
    if (LAST_NUM > PRE_LAST_NUM) {
        num_list.push(LAST_NUM - PRE_LAST_NUM);
    } else {
        num_list.push(LAST_NUM * 2);   
    }
    return num_list;
}