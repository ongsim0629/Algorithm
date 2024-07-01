// input 처리 - [1,2,3,4,5]
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt").toString().trim().split("\n").map(Number);
let n = input[0];
input.splice(0,1);
list = input;
// 전개연산자로 중복 값 제외하고 사이즈만
size_list = [...new Set(list)];

let answer = []

// 브루스포스 시작
for(value in size_list){
    // 이제 tmp_list 연속된 길이 저장해서 answer리스트에 저장
    let count = 1;
    let nv = -1;
    let tmp_answer = [];

    for(let i = 0; i<list.length; i++){
        if (list[i] == size_list[value]){
                        continue;
        }
        if (nv == list[i]){
            count++;
        }
        else {
            if(nv == -1){
                nv = list[i];
                count = 1;
            }
            else {
                tmp_answer.push(count);
                nv = list[i];
                count = 1;
            }
        }
    }

    tmp_answer.push(count);


    answer.push(Math.max.apply(null,tmp_answer));
}

// answer 중 가장 큰 값 출력
console.log(Math.max.apply(null,answer));