//declaración tradicional

function saludar(){
    //bloque de codigo que quiero reutilizar
    document.writeln(`<p>Hola Mundo 🌐</p>`)
}

//expresion de funcion: es una funcion anonima guardada en una variable
const despedirnos = function (){
    document.writeln(`<p>Adiós Mundo 🌐</p>`)
}

function sumar(nro1,nro2){
    document.writeln(`<p>El resultado es: ${nro1+nro2}</p>`)
}

//funciones que retornan un valor

function multiplicar(nro1,nro2){
    const resultado = nro1 * nro2;
    // return nro1+nro2;
    return resultado;
    // no se puede escribir codigo luego del return
}




//invocar o llamar una funcion
saludar()
despedirnos()

//invocar o llamar una funcion con parametros
const numero1 = parseInt(prompt("Ingresa el primer numero: "))
const numero2 = parseInt(prompt("Ingresa el segundo numero: "))
sumar(numero1,numero2)
sumar(numero1,10)

//invocar funciones con parametros y que envie resultado
console.log(multiplicar(numero1,numero2))
const resultado = multiplicar(numero1,numero2);
document.writeln(`<P>Multiplicar numero1: ${numero1} * numero2: ${numero2} = ${resultado}</p>`)
document.writeln(`<P>Multiplicar numero1: ${numero1} * numero2: ${numero2} = ${multiplicar(numero1,numero2)}</p>`)