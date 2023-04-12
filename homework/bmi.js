let heightInInches = prompt("Please enter your height in inches");
let weightInPounds = prompt("Please enter your weight in pounds");
console.log("Hight " + heightInInches + " Inch");
console.log("Weight " + weightInPounds + " Pounds");

// 1 inch is equal to 2.54 cm
let cm = 2.54;
// 2.2046 pounds is equal to 1 kilo
let kilo = 2.2046;

let heighInCM = heightInInches / cm;
let weightInKilo = weightInPounds / kilo;
let squareRootHeight = Math.sqrt(heighInCM);
console.log("Hight in cantimeter is " + heighInCM);
console.log("Weight in kilo is " + weightInKilo);
console.log("Square Root of height is " + squareRootHeight);

let bmi = weightInKilo / squareRootHeight;
console.log("Your body mass index (BMI) is " + bmi);
