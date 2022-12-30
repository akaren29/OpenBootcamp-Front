// #para Private ->solo se puede acceder desde dentro de la clase
// _Para protected -> se accede desde dentro de la clase y desde clases descendientes


class Estudiante{
    nombre= "ana"
    asignaturas= ['javascript' ,'HTML', 'CSS'];
    constructor(nombre,asignaturas){
        this.nombre = nombre;
        this.asignaturas = asignaturas;

    }

    obtenDatos(){
        return `${this.nombre} ${this.asignaturas}`
    }
}

const nuevo_estudiante = new Estudiante("javier", ['js','react', 'css']);
console.log(nuevo_estudiante.obtenDatos());