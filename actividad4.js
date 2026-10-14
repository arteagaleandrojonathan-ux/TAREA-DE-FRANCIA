//funcion 3:
//Crear una funcion que solicite que solicite dos arreglos numericos, debera
//retornar la suma de ambos arreglos siempre que tengan el mismo numero 
//de elementos, de lo contrario, devolver un array vacio[]

function sumaArrglos(lista1=[], lista2=[]){
    let acumular = 0
    let suma = [];
    if (lista1.length == lista2.length){
        lista1.forEach((recorrer1, i)=> {
            acumular = recorrer1 + lista2[i]
            suma.push(acumular)
        });
    }else{
        return ('No coinciden el numero de elementos')
    }
    return suma
}

console.log(sumaArrglos([1,2,3,4,5],[1,2,3,4,5]))


console.log("------------------------------------------------------------------------")
//funcion 4:
//crear una funcion que solicite un numero positivo y retorne todo los divisores
//desde 1 hasta el numero que hayas indicado. El resultado se obtiene
//como arreglo, Ejemplo : 22 -> [1,2,11,22] (ese arreglo seria la respuesta)

function solicitarNumero(numero){
    let divisores = []

    if (numero > 0){
        for (let i = 1; i <= numero; i++){
            if(numero % i === 0 ){
                divisores.push(i)
            }
        }
    }else{
        return("No es un número positivo")
    }
    return divisores
}

console.log(solicitarNumero(22))