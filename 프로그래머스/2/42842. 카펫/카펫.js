function solution(brown, yellow) {
    let width = 0;
    let height =  0;

    // 가로 길이 완탐
    for (let width = 3; width <  brown / 2; width++){
        height = (brown + yellow)/width;
        if (height <= width){
          if((height - 2) * (width - 2) === yellow ){
            var answer = [width, height];
            return answer;
        }   
        }
    }
}