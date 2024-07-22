const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));
const N = input[0][0];
const score_list = input[1];
// 최고점
const M = Math.max.apply(null, score_list);

function calc_new_avg(scores,high_score){
    let new_scores = [];
    for(let i = 0; i < scores.length; i++){
        // 최고점인 경우 -> 점수 조작 없이 그냥 그대로 새로운 점수 리스트에 추가
        new_scores.push(scores[i]/high_score*100);
    }
    let new_scores_sum = 0;
    for(let i = 0; i < new_scores.length; i++){
        new_scores_sum += new_scores[i];
    }

    let new_avg = new_scores_sum / new_scores.length;
    return new_avg.toFixed(2);
}

let answer = calc_new_avg(score_list, M);
console.log(answer);