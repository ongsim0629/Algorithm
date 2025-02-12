function solution(users, emoticons) {
    const discountRates = [10, 20, 30, 40]; // 가능한 할인율
    let maxSubscribers = 0, maxSales = 0; // 최적의 가입자 수와 매출액 저장

    // 모든 할인율 조합을 생성하는 백트래킹 함수
    function dfs(index, discounts) {
        if (index === emoticons.length) {
            calculateResult(discounts); // 할인율 조합이 완성되면 결과 계산
            return;
        }
        
        for (let rate of discountRates) {
            discounts.push(rate);
            dfs(index + 1, discounts);
            discounts.pop();
        }
    }

    // 특정 할인율 조합에서 가입자 수와 매출액 계산
    function calculateResult(discounts) {
        let subscribers = 0, sales = 0;

        users.forEach(([minDiscount, maxPrice]) => {
            let totalCost = 0;

            // 각 사용자별 구매 총 비용 계산
            emoticons.forEach((price, idx) => {
                if (discounts[idx] >= minDiscount) { // 최소 할인율을 만족하는 경우만 구매
                    totalCost += price * (1 - discounts[idx] / 100);
                }
            });

            if (totalCost >= maxPrice) {
                subscribers++; // 이모티콘 구매를 취소하고 플러스 서비스 가입
            } else {
                sales += totalCost; // 이모티콘 구매
            }
        });

        // 최적의 값 갱신
        if (subscribers > maxSubscribers || (subscribers === maxSubscribers && sales > maxSales)) {
            maxSubscribers = subscribers;
            maxSales = sales;
        }
    }

    dfs(0, []); // DFS 탐색 시작

    return [maxSubscribers, maxSales]; // 최적의 가입자 수와 매출액 반환
}
