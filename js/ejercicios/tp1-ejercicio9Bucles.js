//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

//restringir la cantidad de caracteres que ingresa el usuario

const frase = prompt("Ingrese una frase: ").toLowerCase();

console.log(frase)
console.log(frase.length)
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())
console.log(frase.charAt(0))

for(let i=0;(i<frase.length);i++){
    if (frase.charAt(i) === "a" || frase.charAt(i) === "e" || frase.charAt(i) === "i" || frase.charAt(i) === "o" || frase.charAt(i) === "u") {
        document.writeln(frase.charAt(i))
    }
}

