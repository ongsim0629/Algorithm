function solution(numbers, hand) {
  let answer = '';
  let left  = '*';
  let right = '#';

  const pos = { 1:[0,0],2:[1,0],3:[2,0],
                4:[0,1],5:[1,1],6:[2,1],
                7:[0,2],8:[1,2],9:[2,2],
                '*':[0,3],0:[1,3],'#':[2,3] };

  // 맨해튼 거리 계산
  const dist = (from, to) =>
    Math.abs(pos[from][0]-pos[to][0]) + Math.abs(pos[from][1]-pos[to][1]);

  for (const num of numbers){
    if ([1,4,7].includes(num)){             // 왼쪽 열
      answer += 'L';
      left = num;
    }
    else if ([3,6,9].includes(num)){     
      answer += 'R';
      right = num;
    }
    else {                                  
      const dL = dist(left, num);
      const dR = dist(right, num);

      if (dL < dR){                       
        answer += 'L';
        left = num;
      } else if (dL > dR){               
        answer += 'R';
        right = num;
      } else {                           
        if (hand === 'left'){
          answer += 'L';
          left = num;
        } else {
          answer += 'R';
          right = num;
        }
      }
    }
  }
  return answer;
}
