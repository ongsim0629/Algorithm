const input = +require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim()

function calc_grade(score){
    if (score <= 100 && score >= 90){
        console.log('A');
    }
    else if (score <= 89 && score >= 80){
        console.log('B');
    }
    else if (score <= 79 && score >= 70){
        console.log('C');
    }
    else if (score <= 69 && score >= 60){
        console.log('D')
    }
    else {
        console.log('F');
    }
}

calc_grade(input);