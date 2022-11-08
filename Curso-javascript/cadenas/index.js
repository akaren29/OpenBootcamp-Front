let name_student = "Karen";
let lastname = "Jasso";

let student = `${name_student} ${lastname}`;
let studentMayus = student.toUpperCase();
console.log(studentMayus);

let studentMinus = student.toLowerCase();
console.log(studentMinus);

let number_Of_Letters = student.length;
console.log(number_Of_Letters);

let first_Letter = name_student.slice(0,1);
console.log(first_Letter);

let last_letter = lastname.slice(-1);
console.log(last_letter);

let delete_space = student.replace(' ', '');
console.log(delete_space);

let boolean_name = student.includes(name_student);
console.log(boolean_name);