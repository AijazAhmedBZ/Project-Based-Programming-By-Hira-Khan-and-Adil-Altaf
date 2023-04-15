import PromptSync from "prompt-sync";
const prompt = PromptSync();

// let isInPakistan = false;
// if (isInPakistan) {
//   console.log("Aoa, Sir Imran");
// } else {
//   console.log("Hi, Mr. Alexander");
// }

//if else and else if statments
// let percentage = prompt("What is your percentage? ");
// if (percentage >= 90) {
//   console.log("A+");
// } else if (percentage >= 80) {
//   console.log("A");
// } else if (percentage >= 70) {
//   console.log("B");
// } else if (percentage >= 60) {
//   console.log("C");
// } else if (percentage >= 50) {
//   console.log("D");
// } else {
//   console.log("F");
// }

//Ternary Operators

// let percentage = prompt("What is your percentage? ");
// const result = percentage >= 50 ? "Passed" : "Failed";
// console.log(result);

// let isInPakistan = prompt("Are you in Pakistan? ");
// const greeting =
//   isInPakistan === "true" ? "Aoa, Sir Imran" : "Hi, Mr. Alexander";
// console.log(greeting);

//Switch statement

let location = prompt("Whare are you? ");
switch (location) {
  case "America":
    console.log("Hi, Mr. Alexander");
    break;
  case "Mecedinia":
    console.log("Hail Alexander the great");
    break;
  case "Pakistan":
    console.log("Aoa, Sir Imran");
    break;
  case "Germany":
    console.log("Guten Tag Alexander");
    break;
  default:
    console.log("Tell me whare are you? ");
}
