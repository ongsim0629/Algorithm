const N = +require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim()

function gugudan(int){
    for(let i = 1; i <= 9; i++){
        console.log(N + " * " + i + " = " + N*i);
    }
}

gugudan(N);