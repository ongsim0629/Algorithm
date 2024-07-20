const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map(line => line.trim());

for(let i = 0; i < input.length - 1; i++){
    let origin = input[i];
    // 요소들 나누고, 그거 뒤집은 리스트
    let element_list = input[i].split("").reverse();
    let reverse = '';
    for(let j = 0; j < input[i].length; j++){
        reverse += element_list[j];
    }
    if(reverse == origin){
        console.log("yes");
    }
    else{
        console.log("no");
    }
}