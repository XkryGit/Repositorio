//---- Array operations ---//

const ciudades = ["Madrid", "Barcelona", "Valencia", "Málaga"];

console.log("Array usado: " + ciudades)



const head = (array) => {
    const [first,] = array;
    return first;
};

console.log("Usando head: " + head(ciudades))



const tail = (array) => {
    const [,...rest] = array;
    return rest;
};

console.log("Usando tail: " + tail(ciudades))


const init = (array) => {
    const copy = [...array]
    copy.pop();
    return copy;
};

console.log("Usando init: " + init(ciudades))



const last = (array) => {
    return array[array.length - 1];
};

console.log("Usando last: " + last(ciudades))


//---- Concat ---//
const arrayA = [0,1,2,3];
const arrayB = [4,5,6,7]

console.log("Arrais usado: " + arrayA + " y el array" + arrayB)

const concat = (a, b) => {
    return [...a,...b]
};

console.log("Usando concat: " + concat(arrayA,arrayB))



const concat2 = (...inputs) => {
    const [first,...rest] = inputs;
    return first.concat(...rest)
};

console.log("Usando concat de multiples arrais (sin saber el número): " + concat2(arrayA,arrayB,arrayA,arrayB));



//---- Clone Merge ---//

//Clone
const objeto = {
    name: "adolfo",
    edad: 30,
};
console.log(objeto)

function clone(source) {
    return copy = {...source}
  }
  console.log(clone(objeto));

//Merge
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
    return merge = {...target, ...source}
  };

console.log(merge(a,b));


//Read Books
const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

function isBookRead(books, titleToSearch) {
    const bookFound = books.find(book => book.title === titleToSearch);
    if (bookFound.isRead === true) {
        return "Este libro ya lo has leido";
    } else {
        return "Este libro no lo has leido"
    }
}

console.log(isBookRead(books, "Canción de hielo y fuego"))


//Slot Machine

let contador = 0;

class SlothMachine {
    play(){
        contador ++;
        const roll1 = Math.random() < 0.5;
        const roll2 = Math.random() < 0.5;
        const roll3 = Math.random() < 0.5;

        if (roll1 & roll2 & roll3 === true) {
            console.log(`Congratulations!!!. You won ${contador} coins!!`);
            contador = 0;
        } else {
            console.log("Good luck next time!!");
        }
    }
};

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();