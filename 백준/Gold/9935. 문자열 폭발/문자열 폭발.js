const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt").toString().trim().split("\n").map(line => line.replace(/\r/g, ""));

const bomb = input[1];
const bomb_length = bomb.length;
const target_str = input[0];
let calc_stack = [];

for (let i = 0; i < target_str.length; i++) {
    calc_stack.push(target_str[i]);

    if (calc_stack.length >= bomb_length) {
        let is_bomb = true;
        for (let j = 0; j < bomb_length; j++) {
            if (calc_stack[calc_stack.length - bomb_length + j] !== bomb[j]) {
                is_bomb = false;
                break;
            }
        }
        if (is_bomb) {
            for (let j = 0; j < bomb_length; j++) {
                calc_stack.pop();
            }
        }
    }
}

if (calc_stack.length === 0) {
    console.log('FRULA');
} else {
    console.log(calc_stack.join(""));
}