const integersThatFits = require('../modules/task178g');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const userInput = [];


rl.question(`Enter first number: `, (firstNum) => {
    userInput.push(+firstNum);
    rl.setPrompt(`Next number (enter to calculate): `);
    rl.prompt();
    rl.on('line', (nextNum) => {
        if(nextNum != ''){
            rl.prompt();
            userInput.push(+nextNum.trim()); 
        } else {
            console.log(`Result: ${integersThatFits(userInput)}`);
            rl.close(); 
        }
    });
});
