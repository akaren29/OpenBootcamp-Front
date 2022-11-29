function funcionSinParametros() {
    return true ;
}

funcionSinParametros();

/*const promesaSetTime = new Promise( (resolve, reject) =>{
    if(true){
        setTimeout(() => {
            resolve(console.log("Hola soy una promesa"));
        }, 5000);  
    }
         
})*/

function* generadoraIndices (){
    let indice = 0;
    while(true){
        indice += 2;
        if(indice === 10){
            return indice
        }

        yield indice
    }
}
const generator = generadoraIndices();

console.log(generator.next().value); 
console.log(generator.next().value); 
console.log(generator.next().value); 
console.log(generator.next().value); 
console.log(generator.next().value); 





