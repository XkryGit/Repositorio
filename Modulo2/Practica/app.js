var hotel = {
    name: "IPV Palace",
    location: "Fuengirola",
    img: "https://cdn2.paraty.es/test3-copia2/images/ad627ab92616dc0=s1900"
};

document.getElementById("hotel-name").innerHTML = "Hotel " + hotel.name;
document.getElementById("hotel-ubication").innerHTML = "Ubicado en " + hotel.location;
document.getElementById("image").src = hotel.img;

var stars = {
    una:
      "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
  };

  var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");
  document.getElementById("rating").innerHTML = stars[rating];

//var rating = prompt("Puntuación  del 1 al 5");
//document.getElementById("rating").innerHTML = rating + " estrellas";

var anonymus = confirm("¿Quieres que la reseña sea anonima?");
document.getElementById("anonymus").checked = anonymus;

