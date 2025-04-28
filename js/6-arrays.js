//declaracion de array

// los array son siempre const, el nombre del array es en plural
//declaro un array vacio
const alumnos = []
console.log(alumnos)

//declaramos un array con datos
const frutas = ["manzana", 20, true, "🍉", "🍊"]
document.writeln(frutas)
console.log(frutas)

//==============================
// FUNCIONES
//==============================
const mostrarFrutas = (titulo) => {
    document.writeln(`<h3>${titulo}</h3>`)
    document.writeln(`<ul>`)
    for (i = 0; i < frutas.length; i++) {
        document.writeln(`<li>${frutas[i]}</li>`)
    }
    document.writeln(`</ul>`)
}
//================================

mostrarFrutas("Mostrar Array")

document.writeln(`<p>Si accedo a la posicion 4 del array obtengo: ${frutas[4]}</p>`)
document.writeln(`<p>Si accedo a la posicion 7 del array obtengo: ${frutas[7]}</p>`)

//palabras reservabas para trabajar con arrays

document.writeln(`<h2>Acciones para trabajar con ARRAYS</h2>`)

//Agregar un elemento al principio del array
frutas.unshift("🍇")
mostrarFrutas("Agregar un elemento al principio del array")


//Agregar un elemento al final del array. Se pueden agregar 1 o mas elementos
frutas.push("🥝", 30)
mostrarFrutas("Agregar un elemento al final del array")


//Agregar un elemento al medio del array. Se pueden agregar 1 o mas elementos
//splice(en que posicion, cuantos elementos borro, elemento a agregar)
frutas.splice(4, 0, "🍒")
mostrarFrutas("Agregar un elemento al medio del array")


//modificar un valor del array, indicando en que posicion esta el elemento
frutas[3] = "🍟"
mostrarFrutas("modificar un valor del array")

//eliminar el primer elemento del array
frutas.shift()
mostrarFrutas("eliminar el primer elemento del array")

//eliminar el ultimo elemento del array
frutas.pop()
mostrarFrutas("eliminar el ultimo elemento del array")


//eliminar un elemento en el medio del array

// borrar desde posicion 1, 1 elemento
frutas.splice(1, 1)
mostrarFrutas("eliminar un elemento en el medio del array")
// borrar desde posicion 1, 3 elementos
// frutas.splice(1,3)
// borrar desde posicion 3 en adelante, todos
// frutas.splice(3)
// frutas.splice(3,frutas.length)


//metodos mutables e inmutables: modifican o no el array
document.writeln('<h2>Métodos extras para trabajar con Arrays</h2>')

// frutas.push('🦐')
//encontrar un elemento en el array find(). dentro de los parentesis va una funcion anonima que se usa una sola vez

// const sandia = frutas.find(function(){})
// funcion fecha. item representa el contenido del array
const sandia = frutas.find((item)=> item ==='🍉')
const sandiaPosition = frutas.findIndex((item)=> item ==='🍉')
console.log(sandia)
console.log(sandiaPosition)

const camaron = frutas.find((item)=> item ==='🦐')
const camaronPosition = frutas.findIndex((item)=> item ==='🦐')
console.log(camaron)
console.log(camaronPosition)
//cuando find() no encuentra devuelve undefined y findeIndex() -1

document.writeln(`<p>Se encontró el Elemento buscado ${sandia}, en la posicion ${sandiaPosition}</p>`)
document.writeln(`<p>Se encontró el Elemento buscado ${camaron}, en la posicion ${camaronPosition}</p>`)


//falsy: "" - null - undefined - NaN  - -1
if (camaron){
    document.writeln(`<p>Se encontró el Elemento buscado ${camaron}, en la posicion ${camaronPosition}</p>`)
} else{
    document.writeln(`<P>No se encontró el elemento buscado 🦐</P>`)
}

//operador ternario ?: S PARA CONDICIONAL DOBLE CORTITO
// (condicion logica) ? 'texto' : 'otro texto'

///     CORREGIR EN CLASE
// document.writeln(`${(camaron) ? '<p>Se encontró el Elemento buscado'+camaron', en la posicion '+camaronPosition'+'</p>' : `<P>No se encontró el elemento buscado 🦐</P>`})
