function solution(id_list, report, k) {
    // 중복 신고 제거
    const uniqueReports = new Set(report);

    // 신고당한 횟수를 기록할 객체
    const reportCount = {};
    id_list.forEach(id => {
        reportCount[id] = 0;
    });

    // 신고한 유저와 신고당한 유저 매핑
    const reporterMap = {};
    id_list.forEach(id => {
        reporterMap[id] = [];
    });

    // 각 신고를 처리
    uniqueReports.forEach(rep => {
        const [reporter, reported] = rep.split(' ');
        reportCount[reported] += 1;
        reporterMap[reporter].push(reported);
    });

    // 정지된 유저 찾기
    const bannedUsers = new Set(
        id_list.filter(user => reportCount[user] >= k)
    );

    // 각 유저가 받은 메일 수 계산
    const result = id_list.map(user =>
        reporterMap[user].filter(reported => bannedUsers.has(reported)).length
    );

    return result;
}
