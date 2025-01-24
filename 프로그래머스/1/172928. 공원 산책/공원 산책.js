function solution(park, routes) {
    // 1. 방향에 따른 이동 정의
    const direction = { N: [-1, 0], S: [1, 0], W: [0, -1], E: [0, 1] };
    let start = [0, 0];

    // 2. 시작 위치(S) 찾기
    for (let i = 0; i < park.length; i++) {
        const col = park[i].indexOf("S");
        if (col !== -1) {
            start = [i, col];
            break;
        }
    }

    // 3. 명령 수행
    for (const route of routes) {
        const [op, n] = route.split(" ");
        const [dy, dx] = direction[op];
        let [y, x] = start;

        let isValid = true;
        for (let step = 1; step <= Number(n); step++) {
            const ny = y + dy * step;
            const nx = x + dx * step;

            // 공원 경계를 벗어나거나 장애물을 만나면 명령 무효화
            if (
                ny < 0 ||
                ny >= park.length ||
                nx < 0 ||
                nx >= park[0].length ||
                park[ny][nx] === "X"
            ) {
                isValid = false;
                break;
            }
        }

        // 유효하면 위치 갱신
        if (isValid) {
            start = [y + dy * Number(n), x + dx * Number(n)];
        }
    }

    return start;
}
