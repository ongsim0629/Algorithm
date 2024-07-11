const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim()
let answer = '';

function str_upper_lower(char){
    for (let i = 0; i < char.length; i++){
        let target = char.charCodeAt(i);
        if(target >= 65 && target <= 90){
            answer += char.at(i).toLowerCase();
        }
        else{
            answer += char.at(i).toUpperCase()
        }
    }
    console.log(answer);
}

str_upper_lower(input);