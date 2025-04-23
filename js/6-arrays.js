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
