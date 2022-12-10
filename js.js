const pizzas = [{
    id:1,
    nombre:'Pizza Napolitana',
    ingredientes:['Mozzarella','Tomate'],
    precio:100
},
{
    id:2,
    nombre:'Pizza Jamon y Queso',
    ingredientes:['Jamon', 'Queso', 'Salsa', 'Pimiento rojo'],
    precio:800
},
{
    id:3,
    nombre:'Pizza a la Albahaca',
    ingredientes:['Queso', 'Albahaca', 'Cebolla', 'Aceitunas'],
    precio:310
},
{
    id:4,
    nombre:'Pizza 4 quesos',
    ingredientes:['Mozzarella', 'Provolone', 'Parmesano', 'Gorgonzola'],
    precio:750,
},
{
    id:5,
    nombre:'Pizza Roquefunes',
    ingredientes:['Mozzarella', 'Cebolla', 'Aceitunas Negras'],
    precio:270,
},
{
    id:6,
    nombre:'Pizza Balenciaga',
    ingredientes:['Huevo', 'Cebolla', 'Tomate Perita'],
    precio:520,
},
{
    id:7,
    nombre:'Pizza Con Champi',
    ingredientes:['Champiñones', 'Salsa de tomate'],
    precio:220,
},
{
    id:8,
    nombre:'Pizza Rucula y Jamon',
    ingredientes:['Rucula', 'Jamon Crudo', 'Tomate'],
    precio:770,
},
{
    id:9,
    nombre:'Pizza Anana y Huevo',
    ingredientes:['Anana', 'Huevo', 'Tomate Perita'],
    precio:320,
},
{
    id:10,
    nombre:'Pizza Mortadela',
    ingredientes:['Mortadela', 'Cebolla', 'Tomate Perita'],
    precio:920,
},
]

const inputNumero = document.querySelector('#numero');
const form = document.querySelector('.container__form');

const checkNumero = () =>{

let valid = false;
const numeroIngresado = inputNumero.value;
if(isEmpty(numeroIngresado)){
    showError(inputNumero,'Debe ingresar un número por favor.');
}else if (!isBetween(numeroIngresado)){
    showError(inputNumero,"Debe ingresar un número entre 1 y 10.");
}else{
    pizzaElegida(numeroIngresado);
    valid = true;
    showSuccess(inputNumero);
}
return valid;
}

const isEmpty = (value) =>!value.length;

const isBetween = (value) => value < 1 || value > 10 ? false : true;

const pizzaElegida = (value) =>{

const h2 = document.querySelector('.pizzah2');
const h3 = document.querySelector('.precio');

pizzas.forEach((pizza) => {
    if(pizza.id == value){
        h2.textContent = pizza.nombre;
        h3.textContent = `$${pizza.precio}`;
    }
});
}

const showError = (input, mensaje) =>{

const error = document.querySelector('.renderizado');
const formField = input.parentElement;
const h2 = document.querySelector('.pizzah2');
const h3 = document.querySelector('.precio');

formField.classList.remove('success');
formField.classList.add('error');
error.textContent = mensaje;
h2.textContent = "";
h3.textContent = "";
}

const showSuccess = (input) =>{

const error = document.querySelector('.renderizado');
const formField = input.parentElement;

formField.classList.remove('error');
error.textContent = "";
}

form.addEventListener('submit',(e) => {
e.preventDefault();
checkNumero();
form.reset();
})