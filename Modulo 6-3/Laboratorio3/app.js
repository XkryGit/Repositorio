//Cuadrado completo
let char = "*";
let squareArrai = []

var square = (n, char) => {
    for (var i = 0; i < n; i++) {
        paintString = "";
        for (var j = 0; j < n; j++) {
            paintString += char;
           squareArrai[i] = paintString;
        }
    }
}

square(6, char)

console.log(squareArrai);

//Cuadrado con Borde

let charBorder = "B";
let charInner = "*";
let squareBorderArrai = [];

 var squareBorder = (n, charBorder, charInner) => {
     for (var i = 0; i < n; i++) {
        paintString = "";
        if (i===0 || i=== n-1) {
            for (var j = 0; j < n; j++) {
                paintString += charBorder;
                squareBorderArrai[i] = paintString;
            }
        } else { 
                for (var j = 0; j < n; j++) {
                   if  (j===0 || j=== n-1) {
                    paintString += charBorder;
                }
                else {
                    paintString += charInner;
                } 
                    squareBorderArrai[i] = paintString;
                }
        } 
     }
 }


 squareBorder(5, charBorder, charInner)

 console.log(squareBorderArrai);

//Cuadrado Diagonal Left-Right
let squareDiagonalLRArrai = [];
let charDiagonal="\\"; 
let charUp="A";
let charDown="B";

var squareDiagonalLR = (n, charDiagonal, charUp, charDown) => { 
    for (var i = 0; i < n; i++) {
        paintString = "";
        for (var i = 1; i < n; i++) {
            paintString += charDown;
            squareDiagonalLRArrai[i] = paintString;
        }
        squareDiagonalLRArrai[0]= "";
        for (var j = 0; j < n; j++) {
            squareDiagonalLRArrai[j] = squareDiagonalLRArrai[j] + charDiagonal;
        }
        paintString = "";
        for (var k = n-1; k >= 0; k--) {
            paintString += charUp;
            squareDiagonalLRArrai[k] = squareDiagonalLRArrai[k] + paintString;
        }

    }
}

squareDiagonalLR(5, charDiagonal, charUp, charDown)

console.log(squareDiagonalLRArrai);

//Cuadrado Diagonal Right-Left
let squareDiagonalrRArrai = [];
let charDiagonalR="/"; 
let charUpR="A";
let charDownR="B";

var squareDiagonalLR = (n, charDiagonalR, charUpR, charDownR) => { 
    for (var i = 0; i < n; i++) {
        paintString = "";
        for (var k = n-1; k >= 0; k--) {
            paintString += charUpR;
            squareDiagonalrRArrai[k] = paintString;
        }
        for (var j = 0; j < n; j++) {
            squareDiagonalrRArrai[j] = squareDiagonalrRArrai[j] + charDiagonalR;
        }
        paintString = "";
        for (var i = 0; i < n; i++) {
            paintString += charDownR;
            squareDiagonalrRArrai[i] = squareDiagonalrRArrai[i] + paintString;
        }
    
    }
}

squareDiagonalLR(6, charDiagonalR, charUpR, charDownR)

console.log(squareDiagonalrRArrai);
//Medio Diamante
let halfDiamondArrai = [];

var halfDiamond = (n, char) => { 
    for (var i = 0; i < n; i++) {
        paintString = "";
        for (var i = 0; i < n; i++) {
            paintString += char;
            halfDiamondArrai[i] = paintString;
            }      
        }
        for (var i = 0; i < n; i++) {
            paintString = "";
            for (var i = 0; i < n; i++) {
                paintString += char;
                halfDiamondArrai[(n + n -2) -i] = paintString;
            }           
        }   
    }    
    

halfDiamond(5, char)

console.log(halfDiamondArrai);

//Piramide
let pyramidArrai = [];

var pyramid = (n, char) => {  
    for (var i = 0; i < n; i++) {
        paintString = "";
        for (var j = 0; j < n - i ; j++) {
            paintString += " ";
            }
        for (var k = -2; k < 2*i-1 ; k++) {
                paintString += char;
                pyramidArrai[i] = paintString;
                }
    }
}

pyramid(5, char)

console.log(pyramidArrai);


//Diamante

let diamondArrai = [];

var diamond = (n, char) => {  
    for (var i = 0; i < n; i++) {
        paintString = "";
        for (var j = 0; j < n - i ; j++) {
            paintString += " ";
            }
        for (var k = -2; k < 2*i-1 ; k++) {
                paintString += char;
                diamondArrai[i] = paintString;
                }
    }
    for (var i = 0; i < n; i++) {
        paintString = "";
        for (var j = 0; j < i+1; j++) {
            paintString += " ";
            }
        for (var k = 0; k < (n - i) * 2 - 1 ; k++) {
                paintString += char;
                diamondArrai[i+n] = paintString;
                }
    }

}

diamond(5, char)

console.log(diamondArrai);