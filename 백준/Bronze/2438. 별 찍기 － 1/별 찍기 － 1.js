const N = +require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim()

function draw_star(int){
    for(let i = 1; i <= N; i++){
            console.log("*".repeat(i));
    }
}

draw_star(N);