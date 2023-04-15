import PromptSync from "prompt-sync";
const prompt = PromptSync();
let friend = prompt("Please enter your name? ");
switch (friend) {
  case "Malik":
  case "Aijaz":
  case "Ahmed":
    console.log("Friend");
    break;
  default:
    console.log("May I know you? ");
}
