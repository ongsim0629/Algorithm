// input 처리 - [[첫 번째 줄][두 번째 줄]]
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./알고리즘/example.txt").toString().split("\n").map(e => e.split(" ").map(Number));

// 덱 구현
class Deque{
  constructor(){
      this.array = [];
      this.head = 0;
      this.tail = 0;
      this.size = 0;
  }
  
  get_size(){
    return this.size;
  }

  push_head(item){
    if(this.get_size() == 0){
      this.array[this.head] = item;
      this.size = 1;
    }
    else{
      for(let i = this.size; i > 0; i--){
        this.array[i] = this.array[i-1];
      }
      this.array[this.head] = item;
      this.size += 1;
      this.tail++;
    }
  }

  push_tail(item){
    if(this.get_size() == 0){
      this.array[this.tail] = item;
      this.size = 1;
    }
    else{
      this.array[this.tail+1] = item;
      this.size += 1;
      this.tail ++;
    }
  }

  pop_head(){
    if(this.get_size() == 0){
      console.log("덱이 비어있습니다!");
    }
    else{
      delete this.array[this.head];
      for(let i = 0; i<this.size-1; i++){
        this.array[i] = this.array[i+1];
      }
      this.array.splice(this.tail,1);
      this.size -= 1;
      this.tail --;
    }
  }

  pop_tail(){
    if(this.get_size() == 0){
      console.log("덱이 비어있습니다!")
    }
    else{
      this.array.splice(this.tail,1);
      this.size -= 1;
      this.tail --;
    }
  }
}


// 변수 선언
let size = input[0][0];
let n = input[0][1]
let list = input[1];
let count = 0;

// 조건에 부합하는 덱 생성
let deque = new Deque();
for(let i=1; i<=size; i++){
  deque.push_tail(i);
}

// 조건 수행
for(let i = 0; i<n; i++){
    if(deque['array'][0] == list[i]){
      deque.pop_head();
    }
    else{
      let target = deque['array'].indexOf(list[i]);
      while(deque['array'][0] != list[i]){
        // 왼쪽 밀기
        if(target <= deque.get_size()/2){
          let head = deque['array'][`${deque.head}`];
          deque.pop_head();
          deque.push_tail(head);
          count += 1;
        }
        // 오른쪽 밀기
        else{
          let tail = deque['array'][`${deque.tail}`];
          deque.push_head(tail);
          deque.pop_tail();
          count += 1;
        }
      }
      deque.pop_head();
    }
}

console.log(count);