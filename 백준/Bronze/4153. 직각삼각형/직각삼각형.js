const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el)=>el.split(" ").map(Number));

for(let i = 0; i < input.length-1; i++){
    if(input[i][0]**2 + input[i][1]**2 == input[i][2]**2){
        console.log("right");
    }
    else if(input[i][0]**2 + input[i][2]**2 == input[i][1]**2){
        console.log("right")
    }
    else if(input[i][1]**2 + input[i][2]**2 == input[i][0]**2){
        console.log("right")
    }
    else{
        console.log("wrong")
    }
}