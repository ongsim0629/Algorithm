var climbStairs = function(n) {
    dp = [];
    dp[0]=0;
    dp[1]=1;
    if(n > 1){
        dp[2] = 2;
        if(n==2){
            return 2;
        }
    }
    else{
        return 1;
    }
    
    for(let i = 3; i < n+1; i++){
        dp[i] = dp[i-1]+dp[i-2];
    }
    
    return dp[n];
    
};