 export function ampliarInformacion(evento){
        
    let producto = {}

    
    let fotoinfo=document.getElementById("fotoInfo")
    fotoinfo.src=evento.target.parentElement.querySelector("img").src

    let titulofoto=document.getElementById("tituloinfo")
    titulofoto.textContent=evento.target.parentElement.querySelector("h4").textContent

    let descripcion=document.getElementById("descripcionInfo")
    descripcion.textContent=evento.target.parentElement.querySelector("p").textContent

    let precioInfo=document.getElementById("precioinfo")
    precioInfo.textContent=evento.target.parentElement.querySelector("h3").textContent

    producto.foto=evento.target.parentElement.querySelector("img").src
    producto.titulo=evento.target.parentElement.querySelector("h4").textContent
    producto.descripcion=evento.target.parentElement.querySelector("p").textContent
    producto.precio=evento.target.parentElement.querySelector("h3").textContent
    
    return producto
}
