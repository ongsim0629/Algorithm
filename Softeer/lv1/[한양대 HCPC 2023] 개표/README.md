# 개선할 수 있을 것 같은 점

parseInt(x / y) 대신 Math.floor(x/y) 쓰기 <br>
input.length 대신 T 쓰기<br>

# 새로 배운 거
readline 사용 방법, readline 모듈을 이용해서 입력을 처리해야한다. <br>
=> node.js 는 비동기처리와 스트림 기반 입출력이기때문에 라인별로 처리하고, 입력이 끝난 순간에 어떤 처리를 해주어야할지를 내가 처리해줘야한다.<br>

문자열 반복 시에는 repeat() 메소드를 사용하자! 아아~주 간편!<br>

```
console.log('++++ '.repeat(row) + '|'.repeat(col));
```
이렇게 하면 깔끔할 듯!
