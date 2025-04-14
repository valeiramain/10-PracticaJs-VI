// Crear un programa que reciba la nota de un examen final (número entre 0 y 100)
//  y muestre un mensaje según el desempeño del estudiante:

// Si la nota es menor a 0 o mayor a 100, mostrar: "Nota inválida".
// Si la nota está entre 0 y 59, mostrar: "Desaprobado".
// Si la nota está entre 60 y 79:
// Si la nota es mayor o igual a 70, mostrar: "Aprobado con buen desempeño".
// Si no, mostrar: "Aprobado con lo justo".
// Si la nota está entre 80 y 100, mostrar: "Excelente desempeño".

const nota = parseInt(prompt('Ingrese una nota del 0 al 100: '));
console.log(nota)
console.log(isNaN(nota))

if (!isNaN(nota)) {
    if (nota < 0 || nota > 100) {
        document.writeln('Nota inválida')
    } else if (nota <= 59) {
        document.writeln('Desaprobado')
    } else if (nota <= 69) {
        document.writeln('Aprobó con lo justo')
    } else if (nota <= 79){
        document.writeln('Aprobó con buen desempeño')
    } else{
        document.writeln('Excelente Desempeño')
    }
} else {
    document.writeln('Operación inválida')
}

