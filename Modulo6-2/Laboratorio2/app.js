//Alfabetos
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,' ";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm ";


//Texto a encriptar
var texto = "";
var result = "";

//Funciones


var enigma = (plainAlphabet, encryptedAlphabet, texto) => {
    
    var letter = "";
    let characterposition = 0;
    texto = texto.toLowerCase(); 

    for (var i = 0; i < texto.length; i++) {
    letter = texto[i];
    characterposition = plainAlphabet.indexOf(letter);
    result += encryptedAlphabet[characterposition] ;
    }
    return result;
}



function encrypt() {
    document.getElementById("crypt").value = "";
    texto = document.getElementById("nocrypt").value;
    document.getElementById("crypt").value = enigma(plainAlphabet, encryptedAlphabet, texto);
    document.getElementById("nocrypt").value = "";
    texto = "";
    result = "";
}

function desencrypt() {
    document.getElementById("nocrypt").value = "";
    texto = document.getElementById("crypt").value;
    document.getElementById("nocrypt").value = enigma(encryptedAlphabet, plainAlphabet, texto);
    document.getElementById("crypt").value = "";
    texto = "";
    result = "";
}


//Eventos
document.getElementById("encrypt").addEventListener("click", encrypt);
document.getElementById("descrypt").addEventListener("click", desencrypt);


