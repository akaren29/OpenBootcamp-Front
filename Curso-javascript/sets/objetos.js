const info = {
    nombre: "karen",
    apellido: "jasso",
    edad: 31,
    altura: 1.56,
    eresDesarrollador: "si"
}

let obtenerEdad = info.edad;
console.log(obtenerEdad);

const amigo1 = {
    nombre: "ana",
    apellido: "fernandez",
    edad:29,
    altura:1.65,
    eresDesarrollador: "no"
}

const amigo2 = {
    nombre: "Mariana",
    apellido: "sanchez",
    edad:30,
    altura:1.54,
    eresDesarrollador: "no"
}

const lista = [{...info},{...amigo1}, {...amigo2}]
//console.log(lista);

const listaOrdenada = {...lista.sort((a,b) => a.edad - b.edad)}

console.log( listaOrdenada);