let winCount = 0;

const solution = (lottos, win_nums) => {
    for (const lotto of lottos) {
        isIncludesInWinNum(win_nums, lotto);
    }
    return [checkRank(winCount + lottos.filter(lotto => lotto === 0).length), checkRank(winCount)];
}

const isIncludesInWinNum = (win_nums, myNum) => {
    if (win_nums.includes(myNum)) {
        winCount++;
    }
}

const checkRank = (winCount) => {
    if (winCount < 2) {
        return 6;
    }
    return 6 - winCount + 1;
}