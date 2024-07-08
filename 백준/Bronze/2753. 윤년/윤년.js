const input = +require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim()

function calc_leap_year(input){
    let year = input;

    if ((year % 4 == 0 && year % 100 != 0)|| year % 400 == 0){
        console.log(1);
    }
    else{
        console.log(0);
    }
}

calc_leap_year(input)