//Crear un script que solicite al usuario mediante
//  un prompt el nombre de ciudades y almacenarlas en
//  un arreglo, cuando el usuario selecciona cancelar
//  se debe mostrar el arreglo generado, luego realizar 
// las siguientes acciones:

const ciudades = []

do {
    const ciudad = prompt("Ingresá una ciudad:")
    ciudades.push(ciudad)

}while(confirm("¿Queres agregar otra ciudad?"))

console.log(ciudades)

