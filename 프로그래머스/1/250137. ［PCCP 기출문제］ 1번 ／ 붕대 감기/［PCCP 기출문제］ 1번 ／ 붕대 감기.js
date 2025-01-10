function solution(bandage, health, attacks) {
    let answer = health;
    let attack_idx = 0;
    let total_skill_time = 0;
    let recover = 0;
    
    for (let i = 0; i <= attacks[attacks.length-1][0]; i++){
        // 공격 받은 경우
        if(i == attacks[attack_idx][0]){
            answer -= attacks[attack_idx][1];
            if(answer <= 0){
                return -1;
            }
            total_skill_time = 0;
            attack_idx++;
            continue;
        }
        // 공격 받지 않은 경우
        
        // 연속 시전 성공
        if (total_skill_time == bandage[0]-1){
            answer = Math.min(health, answer+bandage[1]+bandage[2]);
            total_skill_time = 0;
        }
        else{
            answer = Math.min(health, answer+bandage[1]);
            total_skill_time += 1;
        }
    }
    
    return answer;
}