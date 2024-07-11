const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim()

function calc_score(grade) {
    let answer = 0;
    switch (grade){
        case "A+":
            answer = 4.3;
            break;
        case "A0":
            answer = 4.0.toFixed(1);
            break;
        case "A-":
            answer = 3.7;
            break;
        case "B+":
            answer = 3.3;
            break;
        case "B0":
            answer = 3.0.toFixed(1);
            break;
        case "B-":
            answer = 2.7;
            break;
        case "C+":
            answer = 2.3;
            break;
        case "C0":
            answer = 2.0.toFixed(1);
            break;
        case "C-":
            answer = 1.7;
            break;
        case "D+":
            answer = 1.3;
            break;
        case "D0":
            answer = 1.0.toFixed(1);
            break;
        case "D-":
            answer = 0.7;
            break;
        default:
            answer = 0.0.toFixed(1);
            break;
    }
    console.log(answer);
  }
  
calc_score(input)