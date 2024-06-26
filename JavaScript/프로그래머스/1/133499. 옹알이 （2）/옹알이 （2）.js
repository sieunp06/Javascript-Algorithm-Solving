function solution(babbling) {
    var answer = 0;
    const word = ['aya', 'ye', 'woo', 'ma'];
    for (const babb of babbling) {
        let change = babb;
        for (let i = 0; i < word.length; i++) {
            change = change.replaceAll(word[i], i);
            if (change.match(/[a-z]/g) === null) {
                break;
            }
        }
        if (change.match(/[a-z]/g) === null) {
            if (change.length === 1) {
                answer++;
                continue;
            }
            let pre = change[0];
            let flag = true;
            for (let i = 1; i < change.length; i++) {
                if (change[i - 1] === change[i]) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                answer++;
            }
        }
    }
    return answer;
}