import { llenarTienda } from "./llenadoTienda.js";
import {ampliarInformacion} from "./ampliarInfo.js";

//creo un elemento vacio en el controlador
let producto={}

//llamando a tienda llenado
llenarTienda()

//referencia al modal 
let modalinfo = new bootstrap.Modal(document.getElementById('modalInfo'))
let modalcompra = new bootstrap.Modal(document.getElementById('resumencompra'))

//rutina para ampliar informacion
let filacontenedora=document.getElementById("fila")
filacontenedora.addEventListener("click",function(evento){
    if(evento.target.classList.contains("btn")){
        producto=ampliarInformacion(evento)
        console.log(producto)

        modalinfo.show()
    }
})

//rutina para añadir un producto del carrito de compra
let carrito=[]

let botonAgregarCarrito=document.getElementById("botonadd")
botonAgregarCarrito.addEventListener("click",function(){
    
    let cantidad=document.getElementById("cantidadProducto").value
    producto.cantidad=cantidad

    carrito.push(producto)
    
    let suma = 0
    
    carrito.forEach(function(producto){
        suma = suma + Number(producto.cantidad)
    })

    let capsula=document.getElementById("capsula")
    capsula.textContent=suma
    capsula.classList.remove("invisible")
    console.log(carrito)
    modalinfo.hide()


})

//rutina para limpiar
let limpiar=document.getElementById("limpiar")
limpiar.addEventListener("click",function(){

    carrito=[]

    let capsula=document.getElementById("capsula") 
    capsula.classList.add("invisible")

})

//rutina para ver el carrito
let botonVerCarrito=document.getElementById("verCarrito")
botonVerCarrito.addEventListener("click",function(){

    //recorrer el carrito y pintar los productos
    let base=document.getElementById("basecarro")

    base.innerHTML=""

    carrito.forEach(function(producto){

        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-8")

        let foto=document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src=producto.foto

        let titulo=document.createElement("h4")
        titulo.classList.add("text-center")
        titulo.textContent=producto.titulo

        let cantidad=document.createElement("h4")
        cantidad.classList.add("text-center")
        cantidad.textContent="Cantidad: "+producto.cantidad

        let precio=document.createElement("h3")
        precio.classList.add("text-center")
        precio.textContent="Precio: $"+producto.precio

        let subtotal=document.createElement("h4")
        subtotal.classList.add("text-center")
        subtotal.textContent="Subtotal: $"+producto.cantidad*producto.precio

        //PADRES E HIJOS
        columna1.appendChild(foto)
        columna2.appendChild(titulo)
        columna2.appendChild(cantidad)
        columna2.appendChild(precio)
        columna2.appendChild(subtotal)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        base.appendChild(fila)

    })

    let total=0
    carrito.forEach(function(producto){
        total=total+Number(producto.cantidad*producto.precio)
    })


    let totalCompra = document.getElementById("total")
    totalCompra.textContent= "Total: $"+total

  

        let btndolar=document.getElementById("btndolar")
        btndolar.addEventListener("click",function(){

            let precio = total
            let dolar = precio / 4025
            totalCompra.textContent = "total dolares $" + dolar.toFixed(2)
            

        
        
    })



    modalcompra.show()

})

