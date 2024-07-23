const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el)=>el.split(" ").map(Number));
const N = input[0][0];
const tee_size_list = input[1];
const T = input[2][0];
const P = input[2][1];

function welcome_kit(num, arr, t, p){
    let tee_count = 0;
    for(let i = 0; i < arr.length; i++){
        tee_count += Math.ceil(arr[i]/t);
    }
    console.log(tee_count);

    let pen_bundles = Math.floor(num / p);
    let remaining_pens = num % p;
    console.log(pen_bundles + " " + remaining_pens);
}

welcome_kit(N,tee_size_list,T,P);