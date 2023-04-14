//Object starts with curley brackets

const student = {
  rollNumber: "PIAIC123456",
  firstName: "Aijaz",
  lastName: "Ahmed",
  courses: ["Web3", "Cloud"],
  address: {
    country: "Pakistan",
    city: "Karachi",
    district: "East",
  },
};

console.log(student);

console.log(student.rollNumber);

student.rollNumber = "PIAIC999999";

console.log(student.rollNumber);
