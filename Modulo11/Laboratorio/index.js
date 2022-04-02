const iva = 1.21;

const reservas = [
    {
        tipoHabitacion: "standard",
        pax: 1,
        noches: 3,
    },
    {
        tipoHabitacion: "standard",
        pax: 1,
        noches: 4,
    },
    {
        tipoHabitacion: "suite",
        pax: 2,
        noches: 1,
    }
    ];


class CarritoDeReservas {
constructor() {
this._reservas = [];
this._subtotal = 0;
this._total = 0;
}
    
calculaSubtotal() {
    this._subtotal = this._reservas.reduce(
    (acumulado, { noches, tipoHabitacion, pax }) => acumulado + noches * (this.calculaPrecioHabitacion(tipoHabitacion) + this.calculasuplementoHabitacion(pax)),
    0
    );
}

calculaPrecioHabitacion(tipoHabitacion) {
    switch(tipoHabitacion) {
    case 'standard':
    return 100;
    case 'suite':
    return 150; 
    }
    return 1;
}

calculasuplementoHabitacion(pax) {
    switch(pax) {
    case 1:
    return 0;
    }
    return (pax - 1)*40;
}

calculaTotal() {
    this._total = this._reservas.reduce((acumulado, { noches, tipoHabitacion, pax }) =>
    acumulado + (noches * (this.calculaPrecioHabitacion(tipoHabitacion) + this.calculasuplementoHabitacion(pax)) * iva), 0);
}

get total() {
    return this._total;
}

get subtotal() {
    return this._subtotal;
}

set reservas(reservas) {
this._reservas = reservas;
this.calculaSubtotal();
this.calculaTotal();
}
}

class CarritoDeReservasGrandesVolumenes extends CarritoDeReservas {
    
    calculaSubtotal() {
        this._subtotal = this._reservas.reduce(
        (acumulado, { noches, pax }) => acumulado + noches * (100 + this.calculasuplementoHabitacion(pax)),
        0);
    }
    
    calculaTotal() {
        this._total = this._reservas.reduce((acumulado, { noches, pax }) =>
        acumulado + (noches * (100 + this.calculasuplementoHabitacion(pax)) * iva), 0);
        this._total = this._total * 0.85;
    }
    
}

console.log('--- Carrito de la compra normal ---');
const carrito = new CarritoDeReservas();
carrito.reservas = reservas;
console.log("subtotal", carrito.subtotal);
console.log('total', carrito.total);

console.log('--- Carrito de la compra Grandes Volumenes ---');
const carritovolumen = new CarritoDeReservasGrandesVolumenes();
carritovolumen.reservas = reservas;
console.log("subtotal", carritovolumen.subtotal);
console.log('total', carritovolumen.total);
