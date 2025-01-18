function solution(name, yearning, photo) {
    // 이름에 해당하는 그리움 점수를 매핑할 객체 생성
    const yearningMap = new Map();
    for (let i = 0; i < name.length; i++) {
        yearningMap.set(name[i], yearning[i]);
    }
    
    // 각 사진의 추억 점수를 계산
    const answer = photo.map(picture => {
        return picture.reduce((sum, person) => {
            // 사진 속 인물에 대한 그리움 점수를 찾아 합산
            return sum + (yearningMap.get(person) || 0);
        }, 0);
    });
    
    return answer;
}
