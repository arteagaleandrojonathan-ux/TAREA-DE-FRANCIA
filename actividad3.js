//función 1:
// crear una funcion que reciba un arreglo de numeros y retorn como resultado
// un objketo indicandonos cuantos son pares e impares

//Test, demostracion, console.log

function recibeNumeros(numero = [], haynumeros = true){
  
  let par = 0
  let impar = 0
  if (haynumeros){
    numero.forEach(recorrecNumero => {
      if ( recorrecNumero % 2 == 0) par = par +1
      else {
        impar = impar + 1
      }
      
    });
  };
  return ("par:", par, "impar:", impar)
}

console.log(recibeNumeros([23,12,54,76,12,47,34,87,23,52]))

//funcion 2:
//escribir una funcion que retorne true|false dependiendo si el valor de entrada 
//corresponde a un numero capicúa. 121, 444, 3223. Solo permite analizar valores 
//de hasta 5 digitos (99999)

//Test, demostracion, console.log
