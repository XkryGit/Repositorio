//Variables
const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
   ];


//Eliminar producto

let indice;

for (var i = 0; i < carrito.length; i++) {
    if (carrito.id = 54657){
        indice = i;
    };
}

carrito.splice(indice, 1);

//Listar productos

for (var i = 0; i < carrito.length; i++) {
        imprimir(carrito[i]);
   }

function imprimir (producto){
    console.log("Id: " + producto.id);
    console.log("Nombre: " + producto.name);
    console.log("Precio: " + producto.price);
    console.log("Cantidad: " + producto.count);
    console.log("premium: " + producto.premium);
}

//Calcular precio total

let total = 0;

for (var i = 0; i < carrito.length; i++) {
    total = total + carrito[i].price * carrito[i].count;
}
 //console.log("El precio total es " + total)

//Filtrar productos prime

for (var i = 0; i < carrito.length; i++){
    filtrarprime(carrito[i]);
}

function filtrarprime (producto){
    if (producto.premium === true) {
        console.log("Nombre del producto premium: " + producto.name);
    } 
}

//Precio Descuento
if (total > 100) {
    total = total * 0.95;
    console.log("El precio total con descuento es " + total)
} else { 
    console.log("El precio total es " + total)
}
