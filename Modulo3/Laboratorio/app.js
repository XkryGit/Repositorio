//Ejercicio IVA
const product = { count: 3, price: 12.55, type: "ropa" };

let total = product.count * product.price;
total = total < 0 ? 0: total;

// Usando If sin mirar ayudas

// if (product.type == "alimentacion"){
//     total = total * 1.01;
// } else if (product.type == "libro"){
//     total = total * 1.04;
// } else if (product.type == "ropa"){
//     total = total * 1.21;
// }

let tipoiva;
switch(product.type){
    case "alimentacion":
        tipoiva = 0.10; break;
    case "libro":
        tipoiva = 0.04; break;
    default: tipoiva = 0.21;
}

iva = total * tipoiva;

total = total + iva;

console.log("El precio total es " + total);


//Ejercicio salario
const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
   }

const sueldobruto = empleado.bruto;
let retencion = 100;

if (empleado.hijos > 1 && empleado.bruto > 12000) {
    retencion = retencion + 2;
}

if (empleado.bruto > 34000) {
        retencion = retencion - 30; 
    } else if (empleado.bruto >= 24000) {
        retencion = retencion - 16; 
    } else if (empleado.bruto >= 12000) {
        retencion = retencion - 8; 
    } else if (empleado.bruto > 0) {
        retencion = 1 ; 
    }
    

const sueldoneto = (sueldobruto * retencion) / 100;

console.log("Tu sueldo al año es de " + sueldoneto);
console.log("Tu sueldo mensual es de " + (sueldoneto / empleado.pagas));