const input = +require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "알고리즘/example.txt").toString().trim();

function movie_director(number){
    let count = 0;
    let i = 0;
    // N이 10,000이므로 브루트포스해도 괜찮지 않을까..?
    while(count <= number){
        let str_i = i.toString();
        if (str_i.includes('666')) {
            count++;
            if(count == number){
                console.log(str_i)
            }
          }
        i++
    }    
}

movie_director(input);