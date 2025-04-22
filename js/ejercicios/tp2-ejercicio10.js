//10- Realiza un script que pida número de filas y columnas y escriba una tabla.
//  Dentro de cada una de las celdas deberá escribirse un número consecutivo en
//  orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
// <tr> son filas
// <td> son columnas

const filas = parseInt(prompt("Ingrese número de filas: "))
const columnas = parseInt(prompt("Ingrese número de columnas: "))
let contenido = filas * columnas

document.writeln(` <table>
        <tbody>`)

for (let indiceFilas = 1; indiceFilas <= filas; indiceFilas++) {
    document.writeln(`<tr>`)
    for (let indiceColumnas = 1; indiceColumnas <= columnas; indiceColumnas++) {
        document.writeln(`<td>${contenido}</td>`)
        contenido = contenido - 1
    }
    document.writeln(`</tr>`)
}

document.writeln(`
        </tbody>
    </table>`)


