//Nested or Multidimentional array

const array1 = [1, 2, 3];
const array2 = [array1, array1];
console.log(array2);
console.log(array2[0][1]);

//To sort values in array use sort

// let ages = [1, 11, 2, 18, 72, 33, 56, 40];
// ages.sort();
// console.log(ages);

// ages.reverse();
// console.log(ages);

// const numArray = [0, 1, 11, 2, 60, 3, 42, 4, 90, 5, 6];
// numArray.sort();
// console.log(typeof numArray[0]);

// const classDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Saturday"];
// console.log(classDays);

//To find any value from array use .find
// let findValue = classDays.find((e) => e === "Thursday");
// console.log(findValue);
// let findValue2 = classDays.find((e) => e === "Sunday");
// console.log(findValue2);

// const daysOfWeek = [];

// console.log(daysOfWeek);

// // Push is used to add item in an array in last index position
// daysOfWeek.push("1");
// daysOfWeek.push("Sunday");
// daysOfWeek.push("Tuesday");

// //splice is used to insert item in array, first value is the index position after which we need to add and second for deleting
// daysOfWeek.splice(1, 0, "Monday");
// console.log(daysOfWeek);

// const daysOfWeek2 = [5, 6, 7, "Wednesday", "Thursday", 1000];
// console.log(daysOfWeek2);

// //To concatinat two arrays
// console.log(daysOfWeek.concat(daysOfWeek2));

// const allDays = daysOfWeek.concat(daysOfWeek2);
// console.log(allDays);

// //Pop is used to elminate last index value in an array

// allDays.pop();

// console.log(allDays);
// //shift is used to elminate first index value in an array
// allDays.shift();

// console.log(allDays);
// allDays.splice(3, 3);
// console.log(allDays);
