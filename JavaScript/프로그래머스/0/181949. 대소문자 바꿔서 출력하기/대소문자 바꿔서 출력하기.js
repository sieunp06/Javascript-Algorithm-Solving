const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    var answer = '';
    
    for (const alphabet of str) {
        if (alphabet.charCodeAt() >= 'a'.charCodeAt()) {
            answer += alphabet.toUpperCase();
            continue;
        }
        answer += alphabet.toLowerCase();
    }
    console.log(answer);
});