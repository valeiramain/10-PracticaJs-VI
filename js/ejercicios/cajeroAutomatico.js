// crear un programa al estilo de un cajero automatico con las sgtes opciones:
// 1- cansultar saldo 
// 2-ingresar dinero 
// 3-extraer dinero

// switch(opcion){
//     case 1:
//         codigo para la opcion 1
//     case 2:
//         codigo para la opcion 2
//     case 3:
//         codigo para la opcion 3
//     default:
//         codigo si la opcion no coincide con ninguno de los casos programados
// }


let saldo = 10000;
do {
    const opcion = parseInt(prompt("Ingrese una opción (1-Consultar el saldo, 2-Ingresar dinero, 3-Extraer dinero): "));

    switch (opcion) {
        case 1:
        case "1":
        case "saldo":
            document.writeln("</br>Su saldo es: $" + saldo);
            break;
        case 2:
            const deposito = Number(prompt("Ingresa el monto a depositar: $"));
            console.log("deposito:"+deposito);
            saldo = saldo + deposito;
            console.log("saldo:"+saldo);
            // saldo += deposito;
            document.writeln("</br>Depositaste $" + deposito + ", tu saldo actual es $" + saldo);
            document.writeln(`<br>Depositaste $${deposito}, tu saldo es $${saldo}`);
            break;
        case 3:
            // preguntar si el monto a extraer es menor al saldo
            const extraccion = Number(prompt("Ingresa el monto a extraer:"));
            if (extraccion <= saldo) {
                saldo = saldo - extraccion;
                // saldo -= extraccion;
                document.writeln(`<br>Extraíste $${extraccion}, tu saldo es $${saldo}`);
            } else {
                document.writeln("</br>Saldo insuficiente")
            }
            break;

        default:
            document.writeln("</br>Ingresaste una opción inválida")
    }

} while (confirm("Desea realizar otra operacion?"))


