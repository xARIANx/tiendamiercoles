let etiquetaBoton=document.getElementById("boton")

etiquetaBoton.addEventListener("click",cambiarFoto)
function cambiarFoto(){
    let titulo2=document.getElementById("titulo2")
    titulo2.textContent="buenos dias señor"
}

let etiquetaImagen=document.getElementById("fotoWuTang2")

etiquetaImagen.addEventListener("mouseover",cambiarTexto)
function cambiarTexto(){
    let etiquetaTitulo=document.getElementById("titulo")
    etiquetaTitulo.textContent="Wu Tang-Clan"

}

