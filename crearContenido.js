import { getPublicaciones, setPublicacion } from "./firebase.js";

const formulario = document.getElementById("publication");
console.log(formulario);
formulario.addEventListener('submit', (e) => {
    event.preventDefault()
    let titulo = formulario["titulo"].value;  
    let autor =  formulario["autor"].value;  
    let contenido =  formulario["contenido"].value;  
    setPublicacion(titulo, autor, contenido);
    formulario.reset();
    alert("Publicación Agregada con Éxito")
})    