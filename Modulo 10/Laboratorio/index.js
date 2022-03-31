// hasID
const ejemplo1 = {
    id: 12,
    name: "Javi",
    age: 36,
    };

function hasId(object) {
const {id, ...rest} = object;
if (id === undefined) {
    return false;
 } else
    return true;
}

console.log(hasId(ejemplo1));


//Head
const names = ["Javi", "Lissette", "Dani"];

function head(object) {
    const Head = ([first, ]) => first;
console.log(Head(object));
}

head(names);

//Tail
function tail(object) {
const [ , ...restItems] = object;
console.log(restItems);
}
tail(names);


//swapFirstToLast

function swapFirstToLast(object) {
    const [ first, ...restItems] = object;
    object2 = [...restItems, first]
    console.log(object2);
    }
    swapFirstToLast(names);


//excludeId

function excludeId(array) {
const {id, ...rest} = array;
return rest;
}

console.log(excludeId(ejemplo1));


//wordsStartingWithA
const nombres = ["Javi", "Lissette", "Adolfo", "Jaime", "Victor", "Dani", "Alejandro"];


const wordsStartingWithA = books => books.filter(book => book[0] === "A");

console.log(wordsStartingWithA(nombres));


//concat

function concat() {
    
    let params = [].slice.call(arguments);
    console.log(params.join(" | "));
} 

console.log(concat("Javi", "Lissette", "Adolfo", "Jaime", "Pepe"));


//multArray

const arr = [6, 7, 8, 8, 4, 3];

function multArray(numbers, multiplicater) {
return numbers.map(number => number * multiplicater);
}

console.log(multArray(arr, 4));



//calcMult

function calcMult() {
    let numbers = [].slice.call(arguments);
    let result = 1;

  numbers.forEach(number => result = number * result);
    return console.log(result);
    }

console.log(calcMult(5, 4, 3));



