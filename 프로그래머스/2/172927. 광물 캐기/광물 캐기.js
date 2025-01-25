function solution(picks, minerals) {
   const fatigue = {
       diamond: [1, 5, 25],
       iron: [1, 1, 5], 
       stone: [1, 1, 1]
   };
   
   let totalPicks = picks.reduce((sum, count) => sum + count, 0);
   
   // 광물은 곡괭이로 캘 수 있는 만큼만 고려
   const mineralGroups = [];
   for (let i = 0; i < Math.min(minerals.length, totalPicks * 5); i += 5) {
       mineralGroups.push(minerals.slice(i, i + 5));
   }
   
   // 그룹별 피로도 계산 (돌 곡괭이 기준)
   const groupedFatigue = mineralGroups.map(group => {
       return group.reduce((sum, mineral) => sum + fatigue[mineral][2], 0);
   });
   
   const sortedGroups = mineralGroups
       .map((group, idx) => ({ group, fatigue: groupedFatigue[idx] }))
       .sort((a, b) => b.fatigue - a.fatigue);
       
   let totalFatigue = 0;
   
   for (const { group } of sortedGroups) {
       let pickIndex = -1;
       
       // 다이아 -> 철 -> 돌 순서로 곡괭이 선택
       for (let i = 0; i < picks.length; i++) {
           if (picks[i] > 0) {
               pickIndex = i;
               break;
           }
       }
       
       if (pickIndex === -1) break;
       picks[pickIndex]--;
       
       for (const mineral of group) {
           totalFatigue += fatigue[mineral][pickIndex];
       }
   }
   
   return totalFatigue;
}