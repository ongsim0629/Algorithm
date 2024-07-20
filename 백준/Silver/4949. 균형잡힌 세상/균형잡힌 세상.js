const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(".\n"));

for(let i = 0; i < input.length-1; i++){
    let calc_list = [];
    // 문자열을 원소로 쪼갬
    let element = input[i][0].split("");
    // 원소에 대해서 for문
    for(let j = 0; j < element.length; j++){
        // 여는 괄호인 경우 -> 일단 계산 리스트에 푸시
        if(element[j]=='('||element[j]=='['){
            calc_list.push(element[j]);
        }
        // 닫는 대괄호인 경우 -> 
        else if(element[j]==']'){
            // 그 전의 값이 여는 대괄호 였으면 -> 여는 대괄호 제거
            if(calc_list[calc_list.length - 1]=='['){
                calc_list.pop();
            }
            else{
                calc_list.push(element[j]);
            }
        }
        // 닫는 소괄호인 경우 -> 
        else if(element[j]==')'){
            // 그 전의 값이 여는 소괄호 였으면 -> 여는 소괄호 제거
            if(calc_list[calc_list.length - 1]=='('){
                calc_list.pop();
            }
            else{
                calc_list.push(element[j]);
            }
        }
    }
    // 계산 리스트가 비어있다면 -> 적절한 여는 괄호들이 모두 지워진 상태 
    if(calc_list.length == 0){
        console.log("yes");
    }
    // 계산 리스트가 비어있지 않다면 -> 균형 X 였던 문자열이었던 상태
    else{
        console.log("no");
    }
}
