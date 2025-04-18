function solution(arr, delete_list) {
    const answer = [];

    for (let i = 0; i < arr.length; i++) {
        let flag = false;

        for (let j = 0; j < delete_list.length; j++) {
            if (arr[i] === delete_list[j]) {
                flag = true;
                break; // 이미 일치하면 더 볼 필요 없음
            }
        }

        if (!flag) {
            answer.push(arr[i]);
        }
    }

    return answer;
}
