// input 처리 [영상 크기[8], [1, 1, 1, 1, 0, 0, 0, 0], [...], ... ] 형태
const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim().split("\n").map((el)=>el.split("")).map(el => el.filter(item => item !== '\r').map(item => Number(item)));
// 영상크기 n
const N = input[0][0];
// 영상크기 제외한 행렬만
const matrix = [...input.slice(1)];

function quadtree(arr) {
    let length = arr.length;

    // 전체 행렬이 같은 요소로 구성되어 있는 지 확인
    function is0or1(arr){
        let first = arr[0][0];
        for(let row of arr){
            for(let el of row){
                if(el !== first) {
                    return false;
                }
            }
        }
        return true;
    }

    // 길이가 1이면 바로 리턴 
    if (length === 1) {
        return arr[0][0].toString();
    }

    // 모두 같은 숫자라면 그 숫자를 리턴
    if (is0or1(arr)) {
        return arr[0][0].toString();
    }

    // 행렬을 4개로 분할
    let mid = length / 2;
    let topLeft = arr.slice(0, mid).map(row => row.slice(0, mid));
    let topRight = arr.slice(0, mid).map(row => row.slice(mid));
    let bottomLeft = arr.slice(mid).map(row => row.slice(0, mid));
    let bottomRight = arr.slice(mid).map(row => row.slice(mid));

    // 4개의 쿼드 트리를 재귀적으로 호출하고 결과를 합침
    return `(${quadtree(topLeft)}${quadtree(topRight)}${quadtree(bottomLeft)}${quadtree(bottomRight)})`;
}

console.log(quadtree(matrix));
