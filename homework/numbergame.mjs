import PromptSync from "prompt-sync";
const prompt = PromptSync();

const numberGame = prompt("Please enter any number from 0 - 10 ");

let dynamicNumber = Math.floor(Math.random() * 10 + 1);
console.log(dynamicNumber);

if (numberGame > dynamicNumber) {
  console.log("your input number is greater then gussed number");
} else if (numberGame < dynamicNumber) {
  console.log("your input number is lesser then gussed number");
} else console.log("Bingo");
