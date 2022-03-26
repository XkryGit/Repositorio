//Validar IBAN

//Ejemplo de IBAN
let IBAN1 = "ES6600190020961234567890";
let IBAN2 = "ES66 0019 0020 9612 3456 7890";

//CASO1 Validar que se informa con dos letras, y los números correspondientes.
//Validador
const pattern = /^[A-Z]{2}\d{22}$/;

//validacion
let result = pattern.test(IBAN1);

console.log(result);


//CASO2 Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas
//Validador
const pattern2 = /^[A-Z]{2}\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?$/;

//validacion
let result2 = pattern2.test(IBAN2);

console.log(result2);


//CASO3 Vamos a extraer el código de páis y el dígito de control.
//Validador
const pattern3 = /^([A-Z]{2})\d{2}\s?\d{4}\s?\d{4}\s?(\d{2}\s?)\d{2}\s?\d{4}\s?\d{4}\s?$/;

//validacion
let result3 = pattern3.exec(IBAN2);

console.log(result3);


//Validar matrícula coche

//Ejemplos de matriculas
const matriculas = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];


//CASO1 Vamos a validar una matrícula de coche moderna, esta compuesta por 4 digitos y tres letras

//Validador
const pattern4 = /^\d{4}(\s|-)?[A-Z]{3}$/;

//Validacion
matriculas.forEach(matricula => {
    console.log(matricula, "=", pattern4.test(matricula));
    }
);

//CASO2 Vamos a extraer por un lado la parte numérica y por otro las letras.

//Validador
const pattern5 = /^(\d{4})(\s|[-])?([A-Z]{3})$/;

//Validacion
matriculas.forEach(matricula => {
    console.log(pattern5.exec(matricula));
    }
);