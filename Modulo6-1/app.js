// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
    {
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];


//Generar lista

var showproducts = products =>{
    
    for(var product of products){
    printProduct (product);
    }
}

function printProduct (product) {

    var container = document.getElementById("elements")

    var elemento = document.createElement("div");
    elemento.setAttribute ("id", product.description);
    container.appendChild(elemento);

    var description = document.createElement("h5");
    description.innerText = product.description + " - " + product.price + "€/ud. " + " - " + product.stock + " disponibles";
    elemento.appendChild(description);

    var input = document.createElement("input");
    input.setAttribute ("type", "number");
    input.setAttribute ("min", 0);
    input.setAttribute ("max", product.stock);
    input.addEventListener("change", event => { 
        if (event.target.value < 0 || event.target.value > product.stock) {
            products.units = 0;
            alert("ERROR");
        } else {
        product.units = Number(event.target.value);
        }
    });
    elemento.appendChild(input); 
} 

showproducts(products);


//Calcular precio
function calcularcostes () {

    let totalcost = 0;
    let ivacost = 0;
    let totalprice = 0;
    
    for (var i = 0; i < products.length; i++) {
      
        for (var i = 0; i < products.length; i++) {
            totalcost += products[i].price * products[i].units;
            }
        
        for (var i = 0; i < products.length; i++) {
            ivacost += products[i].price * products[i].units * products[i].tax / 100;
            }
        
        
        totalprice = totalcost + ivacost;
    
        document.getElementById("subtotal").innerText = "Subtotal " + totalcost + " €";
        document.getElementById("iva").innerText = "IVA " + ivacost + " €";
        document.getElementById("total").innerText = "TOTAL " + totalprice + " €";   
    
    }
    
}

//Evento 

document.getElementById("calculatebutton").addEventListener("click", calcularcostes);