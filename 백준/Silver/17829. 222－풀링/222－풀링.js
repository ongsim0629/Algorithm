const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));
const N = input[0][0];
const matrix = [...input.slice(1)];

function jongwook_pooling(arr) {
    // 배열의 길이 -> 2되면 재귀 끝나야 함
    let length = arr.length;
    // 재귀가 계속 되면 사이즈는 /2 된다.
    let size = length / 2;
    let new_arr = Array.from(Array(size), () => Array(size).fill(0));

    // 재귀 멈추게 될 때 : 2*2 행렬을 [[1,2],[3,4]]와 같이 저장하므로 arr의 길이가 2일 때!
    if (length <= 2) {
        // 2차원 배열을 1차원 배열로 바꿔줌 [1,2,3,4]
        const flat_arr = arr.flat();
        // 오름차순 정렬
        flat_arr.sort((a, b) => a - b);
        // 두 번째로 큰 수를 반환.
        return flat_arr[2]; 
    }

    // 재귀 안 멈출때는 아까 0으로 채운 배열 속 채우기
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const block = [arr[2 * i][2 * j],arr[2 * i][2 * j + 1],arr[2 * i + 1][2 * j],arr[2 * i + 1][2 * j + 1]];
            // 오름차순 정렬
            block.sort((a, b) => a - b);
            new_arr[i][j] = block[2];
        }
    }

    return jongwook_pooling(new_arr);
}

const result = jongwook_pooling(matrix);
console.log(result);