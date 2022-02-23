/*
//ENTRADAS==VARIABLES==CONSTANTES
let nombreProducto="CD Wu Tang-Clan"
let precioProducto=400000
let pesoProducto=18.5
let tieneDescuento=true
let descripcionProducto="CD Album Cream Wu Tang-Clan"
let telefonoVendedor="3023303552"

//CONSTANTES siempre en mayusculas
const NOMBRE_CLIENTE="Arian"

//ARREGLOS UNIDIMENSIONALES VECTORES
//Sirven para almacenar varios elementos en 1 sola variable
let productos=["CD Wu Tang-Clan","Camisa NWA","Cuadro Hip Hop"]
let productos2=Array("CD Wu Tang-Clan","Camisa NWA","Cuadro Hip Hop")


//SALIDAS
console.log(nombreProducto)
console.log("Su nombre es: "+NOMBRE_CLIENTE+"Y su producto es: "+nombreProducto)
console.log(`Su nombre es: ${NOMBRE_CLIENTE} y su producto es: ${nombreProducto}`)
console.log("******")
console.log(productos)
console.log(productos2[2]) */

//Controlando etiquetas

//1. crear una variable para guardar una etiqueta
let etiquetaTitulo=document.getElementById("titulo")
console.log(etiquetaTitulo)

//2. como modificar el texto de una etiqueta 
etiquetaTitulo.textContent="Holi mundo"

let etiquetaMenu=document.getElementById("titulonavbar")
console.log(etiquetaMenu)
etiquetaMenu.textContent="Hip Hop & Rap"

//Controlando una imagen
let etiquetaFoto=document.getElementById("fotoWuTang1")
etiquetaFoto.src="img/WuTang1.jpg"

//Cambiar el estilo de la etiqueta
etiquetaTitulo.classList.add("text-center")
etiquetaTitulo.classList.add("text-danger")
