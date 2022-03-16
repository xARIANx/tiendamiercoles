let etiquetaBoton=document.getElementById("boton")

etiquetaBoton.addEventListener("click",cambiarFoto)
function cambiarFoto(){
    let titulo2=document.getElementById("titulo2")
    titulo2.textContent="Gracias por vicitar nuestra pagina virtual"
    titulo2.setAttribute("style")
}

let etiquetaImagen=document.getElementById("fotoWuTang2")

etiquetaImagen.addEventListener("mouseover",cambiarTexto)
function cambiarTexto(){
    let etiquetaTitulo=document.getElementById("titulo")
    etiquetaTitulo.textContent="Historia de Wu Tang-Clan"

}

