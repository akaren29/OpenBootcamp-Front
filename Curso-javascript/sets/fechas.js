let fecha = new Date();
console.log(fecha);

let fechaNacimiento= new Date('May 29, 1991');
console.log(fechaNacimiento);

let hoyEsTarde = fecha > fechaNacimiento;
console.log(hoyEsTarde);

let diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

let mesNacimiento = fechaNacimiento.getMonth();
console.log(mesNacimiento);

let anoNacimiento = fechaNacimiento.getFullYear();
console.log(anoNacimiento);