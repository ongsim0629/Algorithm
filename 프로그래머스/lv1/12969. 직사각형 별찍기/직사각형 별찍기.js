process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const input = data.split(" ");
    const rows = Number(input[0]), column = Number(input[1]);
    if ((0 < rows && rows < 1001) && (0 < column && column < 1001)){
        for(var i=0; i < column; i++){
            console.log("*".repeat(rows));
        }
    }
    else {
        console.log("input is too big!");
    }
});