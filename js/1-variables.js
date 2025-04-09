// Comentario de una linea
console.log("Mensaje de Prueba");

document.writeln("<p>Feliz cumple Vale 🎈 </p>");
document.writeln("Feliz cumple Vale 🎈");

// VARIABLES (let - const. no usar var)
let anioNuevo;
let anio = 2025;

document.writeln("<br>Año actual: " + anio);
document.writeln("<br>Año actual: ", anio);

anio = 2024;

const url = "http://127.0.0.1:5500/";
document.writeln("<br>El link de liveServer es: " + url);

// una variable definida como CONST no puede cambiar de valor

// Sumar de 2 numeros - definir con constante
// let numero1, numero2, resultado
const numero1 = parseInt(prompt('Ingrese primer número: '))
const numero2 = parseInt(prompt('Ingrese segundo número: '))

// const numero1 = 10
// const numero2 = 12
const resultado = numero1 + numero2;
// document.writeln("<br>La suma de los dos numeros ingresados es: " + resultado);
document.writeln("<br>La suma de los dos numeros ingresados es: " + (numero1+numero2));

//=========================
//TIPOS DE DATOS: primitivos
//=========================
//string
const nombreUsuario = 'Valentina Iramain';
const producto = "Paraguas";
const saludo = `Hola Mundo`;

//number
const edad = 30;
const precio = 3000.50;
const negativo =-60;


//boolean
const esMayorDeEdad = true;
const encendido = false;

//null este valor indica VACIO
const informacion=null;

//undefined
let datosExtras;


//=========================
//TIPOS DE DATOS: especiales
//=========================
//objeto con notación literal
const funko = {
    nombre:'iroman',
    numero:'xs23456',
    precio: 30.5
}

//array
const colores = ['azul','amarillo','rojo']

//symbol identificadores unicos (dni, legajo, etc)
const alumno = Symbol('legajo')


console.log(nombreUsuario);
console.log(producto);
console.log(saludo)
console.log(edad);
console.log(precio);
console.log(negativo);
console.log(informacion);
console.log(datosExtras);
console.log(funko);
console.log(colores);
console.log(alumno);
console.log(Number.MAX_SAFE_INTEGER)