//Calculator

//Inputs
var number1 = () => parseInt(document.getElementById("inputnumber1").value);
var number2 = () => parseInt(document.getElementById("inputnumber2").value);

//Operations
var sumvar = () => number1() + number2();
var subtractionvar = () => number1() - number2();
var multiplicationvar = () => number1() * number2();
var divisionvar = () => number1() / number2();

//Resolves
var resultsum = () => document.getElementById("seeresult").innerText = sumvar;
var resultsubtraction = () => document.getElementById("seeresult").innerText = subtractionvar;
var resultmultiplication = () => document.getElementById("seeresult").innerText = multiplicationvar;
var resultdivision = () => document.getElementById("seeresult").innerText = divisionvar;

//Events
document.getElementById("sum").addEventListener("click", ifresultsum);
document.getElementById("subtraction").addEventListener("click", resultsubtraction);
document.getElementById("multiplication").addEventListener("click", resultmultiplication);
document.getElementById("division").addEventListener("click", resultdivision);


//Conditions
function ifresultsum () {
    if (isNaN(number1()) || isNaN(number2())) {
        document.getElementById("seeresult").innerText = "Error";
    } else {
        resultsum();
    }
}
function ifresultsubtraction () {
    if (isNaN(number1()) || isNaN(number2())) {
        document.getElementById("seeresult").innerText = "Error";
    } else {
        resultsubtraction();
    }
}
function ifresultmultiplication () {
    if (isNaN(number1()) || isNaN(number2())) {
        document.getElementById("seeresult").innerText = "Error";
    } else {
        resultmultiplication();
    }
}
function ifresultdivision () {
    if (isNaN(number1()) || isNaN(number2())) {
        document.getElementById("seeresult").innerText = "Error";
    } else {
        resultdivision();
    }
}