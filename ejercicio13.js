// formas de crear una funcion
//F1 por declaracion

function hacerAlgo(){
  return"resultado"
}

//F2 por expresión

const saludo = function saludar(){
  return "hola que tal"
}
console.log(saludo())

const suma = function sumar(num1,  num2){
  return num1 + num2
}

console.log(suma(17,29))

//Tipos de funciones: ANÓNIMA (funciones por expresión)
const mensaje = function(){
  return "xd"
}
console.log(mensaje) // Tipo de dato -> function
console.log(mensaje()); // ejecuta la funcion

//Para aplicar este tipo de funciones se rqequiere el ';' antes del llamado
//AUTOEJECUTABLES (se declaran y se ejecutan al mismo tiempo). No olvidar poner el ';'
/*
(Declaracion de la función)
(ejecucion de la función);
*/

(
  function(){
    console.log('hola que tal');
  }
)('xd');

(
  function(nombre = ''){
    console.log('Bienvenido:', nombre)
  }
)('Katherine');

//crea una funcion autoejecutableque calcule el promedio de 3 notas 
//estas funciones suelen ejecutar tareas sin retornar datos

(
  function (nota1, nota2, nota3){
    console.log((nota1 + nota2 + nota3) / 3)
  }
)(14,12,20);