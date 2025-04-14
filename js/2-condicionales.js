//sintaxis de un codicional
//estructura de decision

/*
condicional simple
if(condicion logica){
    codigo a ejecutar
}

condicional doble
if(condicion logica){
    codigo a ejecutar
}else{
    codigo a ejecutar si no se cumple la condicion
}

if(condicion logica){
    codigo a ejecutar
}elseif (condicion logica2){
    codigo a ejecutar
}
}

*/

// la persona es mayor de edad
const edad = parseInt(prompt("Ingrese la edad: "));
if (edad>=18){
    alert('Sos mayor de edad')
}else{
    alert('Sos menor de edad')
}