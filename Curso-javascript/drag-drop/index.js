const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const botonEliminar = document.querySelector('.btn')

parrafos.forEach( parrafo =>{
    /*Inicio del arrastre DRAGSTART */
    parrafo.addEventListener("dragstart" , event =>{
        console.log("estoy arrastrando el parrafo " + parrafo.innerText);
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elem_fantasma= document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elem_fantasma, 0,0)
    })

    parrafo.addEventListener("dragend", ()=>{/**EVENTO PARA ELIMINAR PARRAFO */
        console.log("he terminado de arrastrar");
        parrafo.classList.add("dragging")
    })
})

secciones.forEach( seccion => {
    seccion.addEventListener("dragover", event =>{
        event.preventDefault();
        event.dataTransfer.dropEffect = "move"
    })

    /* seccion.addEventListener("drop", event =>{
        console.log("drop");
        const id_parrafo = event.dataTransfer.getData("id")
        console.log("parrafo id: ", id_parrafo);
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
        
    }) */

    botonEliminar.addEventListener("drop", (event)=>{
        const id_parrafo = event.dataTransfer.getData("id")
        console.log("parrafo id: ", id_parrafo);
        const parrafo = document.getElementById(id_parrafo)
        parrafo.remove()
    })
})

