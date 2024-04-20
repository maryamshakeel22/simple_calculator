#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter your first value:", type: "number", name: "firstNumber" },
    { message: "enter your first value:", type: "number", name: "secondNumber" },
    {
        message: "select one operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponent", "Moduler"]
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Exponent") {
    console.log(answer.firstNumber ** answer.secondNumber);
}
else if (answer.operator === "Moduler") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else {
    console.log("please select a valid operator");
}
