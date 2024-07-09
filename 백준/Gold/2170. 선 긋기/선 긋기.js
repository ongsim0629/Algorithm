const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));
// 선을 그은 횟수
// N 겁내리 커버림 -> O(NlogN) 이하의 알고리즘만 사용 가능
const N = input[0][0];
// 선의 위치 담은 리스트 [[1,3],[2,5],[3,5],[6,7]] 형태임
const test_case = input.splice(1);
// 선의 시작 위치를 기준으로 배열을 정렬 (시작 위치가 같으면 끝 위치 기준으로)
test_case.sort((a, b) => a[0] - b[0] || b[1] - b[1])

function calc_length(arr){
    let x = arr[0][0];
    let y = arr[0][1];
    let answer = 0;

    // 2중 for문 못 씀 잘 생각하긔
    for(let i = 1; i < arr.length; i++){
        // 만약에 그 다음 애가 지금 직선에 완전 포함 된다면 그냥 지금 선 그대로 유지
        if(arr[i][1] <= y){
            continue;
        }
        // 그 다음 애가 지금 직선에 일부만 포함 된다면 -> y값을 다음 애의 y값으로 업데이트 해주어야함.
        else if(arr[i][0] <= y && arr[i][1] >= y){
            y = arr[i][1];
        }
        // 그 다음 애가 지금 직선에 아예 포함 안 된다면 일단 지금 길이 더 해줌
        else if(arr[i][0] >= y){
            answer += y - x;
            x = arr[i][0];
            y = arr[i][1];
        }
    }

    // 마지막 선분 처리
    answer += y - x;

    console.log(answer);
}

calc_length(test_case);