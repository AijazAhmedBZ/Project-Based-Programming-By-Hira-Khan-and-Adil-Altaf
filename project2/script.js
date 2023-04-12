// The coversion factor from miles to kilometer

let milesToKilometer = 1.60934;

// Ask user for data in miles
// let miles = prompt("Please enter the distance in miles");
// console.log(miles, "Miles");

// use the conversion factor to dived miles to kilometer

// let kilometers = miles / milesToKilometer;
// let sentence =
//   "The distance of " + kilometers + " Kms is equal to " + miles + " miles";
// console.log(sentence);

// Ask user for data in kilometers

let kilometer = prompt("Please enter the distance in kilometer");
console.log(kilometer, "Kms");

// use the conversion factor to multiply kilometer into miles

let mile = kilometer * milesToKilometer;
let sentence =
  "The distance of " + mile + " mile is equal to " + kilometer + " Kms";
console.log(sentence);
