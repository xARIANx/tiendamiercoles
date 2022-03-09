//CREANDO UN ARREGLO DE OBJETOS

let productos=[


    {foto:'img/CDWuTang.jpg',nombre:"CD Wu Tang-Clan",precio:40000,descripcion:"CD Album Cream Wu Tang-Clan"},
    {foto:'img/camisaNWA.jpg',nombre:"Camiseta N.W.A",precio:70000,descripcion:"Camiseta original N.W.A"},
    {foto:'img/CDNwa.jpg',nombre:"CD N.W.A",precio:50000,descripcion:"CD Album Fuck tha police N.W.A"},
    {foto:'img/gorra2pac.jpg',nombre:"Gorra 2pac",precio:30000,descripcion:"Gorra Thug Life 2pac"},
    {foto:'/img/GorraWuTang.jpg',nombre:"Gorra Wu Tang-Clan",precio:45000,descripcion:"Gorra original de Wu Tang-Clan"},
    {foto:'img/camisa2Pac.jpg',nombre:"Camiseta 2pac",precio:70000,descripcion:"Camiseta original 2pac"},
    {foto:'img/camisaWuTang.jpg',nombre:"Camiseta Wu Tang-Clan",precio:70000,descripcion:"Camiseta original Wu Tang-Clan"},
    {foto:'img/Gshock.jpg',nombre:"Reloj G-Shock",precio:170000,descripcion:"Reloj original G-Shock"},
    {foto:'img/CD2pac.jpg',nombre:"CD 2pac",precio:70000,descripcion:"CD Album All Eyes On My"},
    {foto:'img/Tenis.jpg',nombre:"Tenis Air Force One",precio:100000,descripcion:"Tenis NIKE originales"}


]

console.log(productos)


//1.Creo la variable para almacenar la base soobre la cual voy a pintar
let fila=document.getElementById("fila")
//COMO RRECORER UN ARREGLO CON JS
//TENER UN ARREGLO
productos.forEach(function(producto){
    console.log(producto.nombre)
    console.log(producto.precio)
    console.log(producto.foto)

    //pintando etiquetas

    //necesito crear un div con la clase col
    let columna=document.createElement("div")
    columna.classList.add("col")

    //Ahora creo un div con las clases card h-100
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    //necesito un img con la clase card-img-top
    let foto=document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src=producto.foto

    //crear una clase h4 para ponerle el titulos a los productos
    let titulo=document.createElement("h4")
    titulo.classList.add("text-center")
    //para mostrar un texto es .textContent
    titulo.textContent=producto.nombre


    //3. PADRES E HIJOS
    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})


//siempre verificar los errores en console