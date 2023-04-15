const theList = [
  "Laurence",
  "Svekis",
  true,
  35,
  null,
  undefined,
  { test: "one", score: 55 },
  ["one", "two"],
];
theList.shift();

theList.pop();
theList.pop();

theList.splice(0, 0, "FIRST");

theList.splice(2, 2, "MIDDLE");

theList.splice(3, 3, "hello world");

theList.push("LAST");
console.log(theList);

//Book working but result not ok
// theList.pop();
// theList.shift();
// theList.unshift("FIRST");
// theList[3] = "hello World";
// theList[2] = "MIDDLE";
// theList.push("LAST");
// console.log(theList);
