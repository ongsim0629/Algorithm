const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));

// 꽃들의 총 개수
const N = input[0][0];
// 꽃들의 개화 날, 낙화 날 담은 리스트
const test_case = input.slice(1);

// 개화 빠른 기준으로 정렬, 개화 날이 같다면 낙화 날 느린 것이 좋은 것이므로 앞 쪽에 위치
test_case.sort((a, b) => a[0] - b[0] || a[1] - b[1] || b[2] - a[2] || b[3] - a[3]);

function princess_garden(arr) {
    // 3월 1일부터
    let pre_end = [3, 1];
    // 11월 30일까지 피어 있어야 함
    let end_date = [11, 30];
    // 다음 꽃 선택 가능한 애들의 마지막 날 -> while문 돌리면서 계속 업데이트 할 예정
    let max_withering = [0, 0];
    let count = 0;
   
    let i = 0;
    while (pre_end[0] < 12) {
        let found = false;
        
        while (i < arr.length) {
            const [startMonth, startDay, endMonth, endDay] = arr[i];
            
            // 꽃이 현재 범위에 있는 경우
            if ((startMonth < pre_end[0]) || (startMonth === pre_end[0] && startDay <= pre_end[1])) {
                // 더 긴 기간 동안 꽃이 피어있는 경우 업데이트
                if ((endMonth > max_withering[0]) || (endMonth === max_withering[0] && endDay > max_withering[1])) {
                    max_withering = [endMonth, endDay];
                    found = true;
                }
                i++;
            } 
            else {
                break;
            }
        }
        
        // 만약에 해당하는 것 못 찾았으면 0 출력
        if (!found) return console.log(0);

        count++;
        pre_end = max_withering;
    }

    console.log(count)
}

princess_garden(test_case)