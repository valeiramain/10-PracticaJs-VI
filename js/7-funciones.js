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

//invocar o llamar una funcion
saludar()
despedirnos()

//invocar o llamar una funcion con parametros
const numero1 = parseInt(prompt("Ingresa el primer numero: "))
const numero2 = parseInt(prompt("Ingresa el segundo numero: "))
sumar(numero1,numero2)
sumar(numero1,10)


//funciones que retornan un valor