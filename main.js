const shopContent = document.getElementById("shopContent")




const productos = [
    {
        id:1 ,
        nombre:"Macarron de Pistacho" ,
        precio :2000 ,
        img:"https://www.betular.com/cdn/shop/files/PISTACHO.jpg?v=1721323035&width=2048"
    },

    {
        id:2 ,
        nombre:"Macarron de Avellanas" ,
        precio : 1500 ,
        img:"https://www.betular.com/cdn/shop/files/AVELLANA.jpg?v=1721323035&width=2048"
    },

    {
        id:3 ,
        nombre:"Macarron de Coco y Dulce de Leche" ,
        precio :1700 ,
        img:"https://www.betular.com/cdn/shop/files/COCO-Y-DDL.jpg?v=1721323012&width=2048"
    },

    {
        id:4 ,
        nombre:"Macarron de Limon" ,
        precio :1600 ,
        img:"https://www.betular.com/cdn/shop/files/LIMON.jpg?v=1721323034&width=2048"
    },

    {
        id:5 ,
        nombre:"Macarron de Mani" ,
        precio : 2200,
        img:"https://www.betular.com/cdn/shop/files/MANI.jpg?v=1721323034&width=2048"
    },
]


let carrito = []

productos.forEach((producto)=> {
    let content = document.createElement("div");
    content.className= "card"
    content.innerHTML= `
    <img src= "${producto.img}">
    <h3>${producto.nombre}</h3>
    <p class="price">${producto.precio} $ </p>
    `;

    shopContent.append(content)
    const comprar = document.createElement("button")
    comprar.innerText = "Comprar"
    comprar.className = "Comprar"

    content.append(comprar)
})