function solution(num_list) {
    for (let i = 0; i < num_list.length; i++){
        if (num_list[i] < 0){
            return i; // 바로 인덱스 반환하고 종료
        }
    }
    return -1; // 음수가 없으면 -1 반환
}