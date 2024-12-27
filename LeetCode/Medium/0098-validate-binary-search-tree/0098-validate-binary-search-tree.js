var isValidBST = function(root) {
    let arr = [];
    let answer = true;

    // 재귀로 풀면 될 듯
    function dfs(node){
        // 기저 함수
        if(node === null){
            return;
        }
        dfs(node.left);
        arr.push(node.val);
        dfs(node.right);
    }

    dfs(root);

    for (let i = 0; i < arr.length - 1; i++){
        if(arr[i] >= arr[i+1]){
            answer = false;
        }
    }

    return answer;
};