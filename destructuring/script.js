/******************1***************** */
let item = ["Egg", 0.25, 12];
let [nombre, decimal, entero] = item;
console.log(`Item: ${nombre}, Quantity: ${decimal}, Price: ${entero}`);
/******************2***************** */
let numbers = [1, 2, 3, 4, 5, 6];
let [one = 1, two = 2, three = 3, four = 4, five = 5, six = 6] = numbers;
console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);
/******************3***************** */
let user = { name: "John", years: 30 };
let { name: firstName, years, isAdmin = false } = user;
console.log(firstName); // John
console.log(years); // 30
console.log(isAdmin); // false
/******************4***************** */
let person = [12, "Chris", "Owen"];
let [age, fName, lastName] = person;
console.log(`Person - Age: ${age}, Name: ${fName} ${lastName}`);
/******************5***************** */
let person2 = ["Chris", 12, "Owen"];
let [firstName2, , lastName2] = person2;
console.log(`Name: ${firstName2} ${lastName2}`);
/******************6***************** */
const students = ["Christina", "Jon", "Alexandare"];
const [, , lastName3] = students;
console.log(lastName3);
/******************7***************** */
const moreStudents = [
	'Chris',
	['Ahmad', 'Antigoni'],
	['Toby', 'Sam']
];
const [student1,[student2,student3],[student4,student5]] = moreStudents;
console.log(student1, student2, student3, student4, student5);