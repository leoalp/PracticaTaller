import { getPublicaciones } from "./firebase.js";
const mostrar = document.getElementById("mostrarPublicacion");
window.addEventListener('DOMContentLoaded', async (event) => {
    const publicaciones = await getPublicaciones();     
    let html  = ""
    publicaciones.forEach(doc => {
        const pub = doc.data()        
        console.log(pub)
        html += `<article>
                    <h1>${pub.titulo}</h1>
                    <h4>${pub.autor}</h4>
                    <p>${pub.contenido}</p>
                </article>`
        
    });
    mostrar.innerHTML = html;
})
 