function solution(keymap, targets) {
    const keyPressCounts = new Map();
    keymap.forEach((keys, keyIndex) => {
        keys.split("").forEach((char, pressCount) => {
            const currentPressCount = keyPressCounts.get(char);
            if (currentPressCount === undefined || pressCount + 1 < currentPressCount) {
                keyPressCounts.set(char, pressCount + 1);
            }
        });
    });

    return targets.map(target => {
        let totalPresses = 0;

        for (const char of target) {
            const pressCount = keyPressCounts.get(char);
            if (pressCount === undefined) {
                // 자판에 없는 문자
                return -1;
            }
            totalPresses += pressCount;
        }

        return totalPresses;
    });
}