const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

let A, B;
rl.on('line', (line) => {
   [A, B] = line.split(' ').map(Number);
}).on('close', () => {
   console.log(A === B ? 'same' : (A > B ? 'A' : 'B'));
});
