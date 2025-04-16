//bucles while - do while - for

/*
while = miestras
while(condicion logica){
    todas las lineas de codigo que quiero repetir muchas veces
    agregar algun codigo para que la condicion logica se deje de cumplir en algun momento
    }
*/

let renglon = 1
while(renglon <= 50){
    document.writeln("</br> Renglón Número"+renglon)
    renglon++
}

//do while (hacer mientras)
/*
do{
    todas las lineas de codigo que quiero repetir muchas veces
    agregar algun codigo para que la condicion logica se deje de cumplir en algun momento
}while (condicion logica)
*/

let linea = 1
do{
    document.writeln("</br>linea numero ="+linea)
    linea++
}while(linea <=50)

//for
/*
for(let variable=0;variable<=50;variable++)
*/

for(let i=10;i>0;i--){
    document.writeln("</br>contador ="+i)
}
