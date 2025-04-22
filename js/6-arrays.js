//declaracion de array

// los array son siempre const, el nombre del array es en plural
//declaro un array vacio
const alumnos = []
console.log(alumnos)

//declaramos un array con datos
const frutas = ["manzana", 20, true, "🍉", "🍊"]
document.writeln(frutas)
console.log(frutas)

document.writeln(`<h2>Mostrar un ARRAY</h2>`)

document.writeln(`<ul>`)
for (i = 0; i < frutas.length; i++) {
    document.writeln(`<li>${frutas[i]}</li>`)
}
document.writeln(`</ul>`)

document.writeln(`<p>Si accedo a la posicion 4 del array obtengo: ${frutas[4]}</p>`)
document.writeln(`<p>Si accedo a la posicion 7 del array obtengo: ${frutas[7]}</p>`)

//palabras reservabas para trabajar con arrays

document.writeln(`<h2>Acciones para trabajar con ARRAYS</h2>`)
document.writeln(`<h3>Agregar elementos en el ARRAY (al principio)</h3>`)

//Agregar un elemento al principio del array
frutas.unshift("🍇")
document.writeln(`<ul>`)
for (i = 0; i < frutas.length; i++) {
    document.writeln(`<li>${frutas[i]}</li>`)
}
document.writeln(`</ul>`)


document.writeln(`<h3>Agregar elementos en el ARRAY (al final)</h3>`)

//Agregar un elemento al final del array. Se pueden agregar 1 o mas elementos
frutas.push("🥝",30)
document.writeln(`<ul>`)
for (i = 0; i < frutas.length; i++) {
    document.writeln(`<li>${frutas[i]}</li>`)
}
document.writeln(`</ul>`)

document.writeln(`<h3>Agregar elementos en el ARRAY (al medio)</h3>`)

//Agregar un elemento al medio del array. Se pueden agregar 1 o mas elementos
//splice(en que posicion, cuantos elementos borro, elemento a agregar)
frutas.splice(4,0,"🍒")
document.writeln(`<ul>`)
for (i = 0; i < frutas.length; i++) {
    document.writeln(`<li>${frutas[i]}</li>`)
}
document.writeln(`</ul>`)


//modificar un valor del array, indicando en que posicion esta el elemento
document.writeln(`<h3>Modificar elementos en el ARRAY</h3>`)

frutas[3] = "🍟"
document.writeln(`<ul>`)
for (i = 0; i < frutas.length; i++) {
    document.writeln(`<li>${frutas[i]}</li>`)
}
document.writeln(`</ul>`)


//eliminar el primer elemento del array
document.writeln(`<h3>eliminar el 1er elementos en el ARRAY</h3>`)

frutas.shift()
document.writeln(`<ul>`)
for (i = 0; i < frutas.length; i++) {
    document.writeln(`<li>${frutas[i]}</li>`)
}
document.writeln(`</ul>`)

//eliminar el ultimo elemento del array
document.writeln(`<h3>eliminar el ultimo elementos en el ARRAY</h3>`)

frutas.pop()
document.writeln(`<ul>`)
for (i = 0; i < frutas.length; i++) {
    document.writeln(`<li>${frutas[i]}</li>`)
}
document.writeln(`</ul>`)


//eliminar un elemento en el medio del array
document.writeln(`<h3>eliminar el ultimo elementos en el medio el ARRAY</h3>`)

// borrar desde posicion 1, 1 elemento
frutas.splice(1,1)
// borrar desde posicion 1, 3 elementos
// frutas.splice(1,3)
// borrar desde posicion 3 en adelante, todos
// frutas.splice(3)
// frutas.splice(3,frutas.length)

document.writeln(`<ul>`)
for (i = 0; i < frutas.length; i++) {
    document.writeln(`<li>${frutas[i]}</li>`)
}
document.writeln(`</ul>`)
