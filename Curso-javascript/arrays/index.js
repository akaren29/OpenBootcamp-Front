let listaCompras = ['huevo', 'cereal', 'harina','queso','nuez'];
listaCompras.push('Aceite de Girasol');

console.log(listaCompras);

listaCompras.pop();
console.log(listaCompras);

const peliculasFavoritas = [
    {
        titulo: "Harry potter y la piedra filosofal",
        director:'Chris Columbus',
        fecha: '2001'
    },
    {
        titulo: 'Más allá de los sueños',
        director: 'Vincent Ward',
        fecha: '1998'
    },
    {
        titulo: 'Interstellar',
        director: 'Christopher Nolan',
        fecha: '2014'
    }
]

let peliculas2010 = peliculasFavoritas.filter(pelicula => {
    return pelicula.fecha >= '2010';
})

console.log(peliculas2010);

let directoresPeliculas = peliculasFavoritas.map(pelicula =>{
    return pelicula.director
})
console.log(directoresPeliculas);

let tituloPeliculas = peliculasFavoritas.map(pelicula =>{
    return pelicula.titulo
})
console.log(tituloPeliculas);

let listaDirectoresTitulos = directoresPeliculas.concat(tituloPeliculas);
console.log(listaDirectoresTitulos);

let listaPropagacionDirectoresTitulos = [...tituloPeliculas, ...directoresPeliculas];
console.log(listaPropagacionDirectoresTitulos);