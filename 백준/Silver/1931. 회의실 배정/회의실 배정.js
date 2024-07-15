const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));
const N = input[0][0];
const meetings = [...input.slice(1)];
// 빨리 끝나는 애들 기준으로 정렬 하고 끝나는 시간이 같다면 시작 시간 빠른 애가 앞 쪽에 정렬된다
meetings.sort((a, b) => a[1] - b[1] || a[0] - b[0])

function calc_meeting(arr){
    let count = 0;
    let time = 0;
    for(let i = 0; i < meetings.length; i++){
        // 현재 시간보다 회의 시작 시간이 늦어야지만 회의실 배정이 가능하다.
        if(time <= meetings[i][0]){
            // 회의 끝난 시간이 이제 현재 시간이 된다.
            time = meetings[i][1];
            count++;
        }
    }
    console.log(count);
}

calc_meeting(meetings);
