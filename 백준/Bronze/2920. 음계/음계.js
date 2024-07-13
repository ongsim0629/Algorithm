const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split(" ").map(Number);
let up_count = 1;
let down_count = 1;
for(let i = 0; i < input.length - 1; i++){
    if(input[i] < input[i+1]){
        up_count++;
    }
    else if(input[i] > input[i+1]){
        down_count++;
    }
}

if(up_count == input.length){
    console.log("ascending");
}
else if(down_count == input.length){
    console.log("descending")
}
else{
    console.log("mixed")
}
