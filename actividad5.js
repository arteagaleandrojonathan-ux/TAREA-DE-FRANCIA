// crea una funcuion autoejecutable, que imprima cuantas horas,
//minutos y segundos faltan para terminar el dia 
//si yo ejecuto a las 23:30:30 
// me debe salir lo que falta para
//terminar el dia 

//Para aplicar este tipo de funciones se rqequiere el ';' antes del llamado
//AUTOEJECUTABLES (se declaran y se ejecutan al mismo tiempo). No olvidar poner el ';'
/*
(Declaracion de la función)
(ejecucion de la función);
*/

let fecha = new Date();
let horas = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();

let horasRestante = 24 - horas;
let minutosRestante = 60 - minutos;
let segundosRestante = 60 - segundos;
(
    function(){
        console.log('Faltan ', horasRestante , 'Horas' );
        console.log('Faltan ', minutosRestante, 'Minutos');
        console.log('Faltan ', segundosRestante, 'Segundos');
        console.log('Para que termine el dia ');
    }
)();


console.log('------------------------------------------------------------------');
//crea una funcion autoejecutable que solicite un numero
//(expresado en segundos) 
//devuekve un saludo despues del tiempo indicado 

(
    function() {
        let segundos = 3
        setTimeout(function(){
            console.log("Hola Wapo");
        }, segundos*1000);

    }
)();
