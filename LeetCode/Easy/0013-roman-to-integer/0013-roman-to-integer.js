var romanToInt = function(s) {
    const dic = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    const arr = s.split('');
    let answer = 0;

    for (let i = 0; i < arr.length; i++) {
        const cur = dic[arr[i]];
        const next = dic[arr[i + 1]];

        if (cur < next) {
            answer += next - cur;
            i++;
        } else {
            answer += cur;
        }
    }

    return answer;
};