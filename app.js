// ! getElementById:
const contenedor = document.getElementById("contenedor");
// console.log(contenedor.innerHTML);

let titulo = document.getElementById("titulo");
// console.log(titulo.innerText);
// console.log(titulo.tagName);

// ! getElementsByClassName:
let toppings = document.getElementsByClassName("topping"); // es un HTMLCollection (una colección HTML es similar a un arreglo en js)
// console.log(toppings.length);
// console.log(toppings[0]);

// ! getElementsByTagName:
const misToppings = document.getElementsByTagName("li");
// console.log(misToppings);

// ! querySelector: selecciona solo el primer elemento:
const primerToppingNaranja = document.querySelector(".topping.fondo-naranja");
// console.log(primerToppingNaranja); // type: object

const toppingNaranja = document.querySelector("ul li.fondo-naranja");
// console.log(toppingNaranja);

const primerToppingNoMarron = document.querySelector(
    "ul li:not(.fondo-marron)"
);
// console.log(primerToppingNoMarron);

// ! querySelectorAll: selecciona a todos los elementos:
const toppingsNaranja = document.querySelectorAll(".topping.fondo-naranja");
// console.log(toppingsNaranja); // NodeList
// console.log(toppingsNaranja.length);
// console.log(typeof toppingsNaranja);
// console.log(toppingsNaranja[0]);
// console.log(toppingsNaranja[1]);

// ? BUSCAR DIFERENCIA ENTRE UN HTMLCOLECCTION Y UN NODELIST

// ! Aplicar estilos con javascript:
const primerTopping = document.querySelector(".topping");
// console.log(primerTopping.style);
primerTopping.style.backgroundColor = "blue";
primerTopping.style.color = "#6dff00";
primerTopping.style.textTransform = "uppercase";

// ! Acceder al texto:
const listaDeToppings = document.getElementById("lista-toppings");
// console.log(listaDeToppings.innerText);
// console.log(listaDeToppings.textContent); // incluye los espacios que tenía ese texto en el archivo html
// console.log(listaDeToppings.innerHTML);

// modificar el texto:
titulo = document.getElementById("titulo");
titulo.innerText = "Mis Toppings favoritos";

// ! Atributos con javascript:
const enlace = document.getElementsByTagName("a");
// console.log(enlace[0].getAttribute("href"));
enlace[0].removeAttribute("href");
enlace[0].setAttribute("href", "https://www.google.com.pe");

// ! Clases:
const primerTopping2 = document.querySelector(".topping");
// console.log(primerTopping2.classList);
primerTopping2.classList.add("texto-verde");
// console.log(primerTopping2.classList);

// ! Verificar si una clase existe:
// console.log(primerTopping2.classList.contains("fondo-marron")); // true
// console.log(primerTopping2.classList.contains("fondo-marron2")); // false

// ! Eliminar una clase:
// primerTopping.classList.remove("topping");

// ! Crear elemento:
const listaDeToppings2 = document.getElementById("lista-toppings");
const toppingNuevo = document.createElement("li");
toppingNuevo.classList.add("topping", "fondo-marron");
toppingNuevo.innerText = "Queso Extra";
listaDeToppings2.append(toppingNuevo);

// ! Eliminar elemento:
toppingNuevo.remove();

// ! Recorrer el DOM:
// padres:
// console.log(listaDeToppings.parentElement.parentElement);
// hijos:
// console.log(listaDeToppings.children);
// console.log(listaDeToppings.children[0]);
// console.log(listaDeToppings.firstChild);
// console.log(listaDeToppings.firstElementChild);
// console.log(listaDeToppings.lastElementChild);
// hermanos:
// console.log(listaDeToppings.previousElementSibling);

// ! Eventos del DOM:
toppings = document.getElementsByClassName("topping");

for (const topping of toppings) {
    topping.addEventListener("click", (e) => {
        console.log(e.target.innerText);
    });
}
