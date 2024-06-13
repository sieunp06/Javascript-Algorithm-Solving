function solution(common) {
    var div = common[1] - common[0];
    var divFlag = true;
    for (let i = 2; i < common.length; i++) {
        if (common[i] - common[i - 1] !== div) {
            divFlag = false;
            break;
        }
    }
    if (divFlag) {
        return common[common.length - 1] + div;
    }
    return common[common.length - 1] * (common[1] / common[0]);
}