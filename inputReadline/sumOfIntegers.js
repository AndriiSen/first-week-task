const getSumOfIntegers = require('../modules/task86b');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



askQuestion();



function askQuestion() {
    rl.question(`Enter number:`, (userInput)=> {
        if(isInteger(userInput)) {
            printResult(userInput);
        } else {
            reInput(userInput);
        }
    });
}

function isInteger(prompt) {
    return !isNaN(+prompt.trim());
}

function printResult(userInput) {
    console.log(`Result is : ${getSumOfIntegers(userInput.trim())}`);
    rl.close();
}

function reInput(userInput) {
    console.log(`\'${userInput}\'is not a Integer, please enter valid data`);
    askQuestion();
}