function solution(babbling) {
    var answer = 0;
    const list = ['aya', 'ye', 'woo', 'ma'];
    
    for (const speaking of babbling) {
        var text = speaking;
        for (const can of list) {
            text = text.replaceAll(can, '-');
            if (text.replaceAll('-', '').length === 0) {
                answer++;
                break;
            }
        }
    }
    
    return answer;
}