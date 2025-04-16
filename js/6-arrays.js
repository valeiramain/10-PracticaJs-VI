//declaracion de array

// los array son siempre const, el nombre del array es en plural
//declaro un array vacio
const alumnos = []
console.log(alumnos)

//declaramos un array con datos
const frutas = ["manzana",20,true,"sandia","naranja"]
console.log(frutas)

for (i=0;i<frutas.length;i++){
    document.writeln(`<ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </ul>
        `)
}