const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim();
let calc_list = [];

function unzip_string(string){
    for(let i = 0; i < string.length; i++){
        let value = string.substr(i,1)
        // 닫는 괄호가 아닌 경우는 일단 계산 스택에 다 푸시
        if(value != ')'){
            calc_list.push(value)
        }
        // 닫는 괄호가 오면 계산 시작해야함
        else{
            let target = '';
            // 여는 괄호 만날 때 까지 팝
            while(calc_list[calc_list.length - 1]!='('){
                target += calc_list.pop();
            }
            // 여는 괄호 꺼내고
            calc_list.pop();
            // 문자열 반복해야하는 횟수 확인
            let num = parseInt(calc_list.pop());
            // 압축해제해서 push
            calc_list.push(target.repeat(num))
        }
    }
    console.log(calc_list);
    let answer = 0;
    for(let i = 0; i < calc_list.length; i++){
        answer+= calc_list[i].length
    }
    console.log(answer);
}

unzip_string(input);

