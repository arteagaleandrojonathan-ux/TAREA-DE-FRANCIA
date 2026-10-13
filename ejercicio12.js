//que es funcion ?
// conjunto de instrucciones que se puede utilizar
// acepta parametros de salida y puede devolver algun valor(opcional)

// prueba o test
function saludar(){
  console.log('hola')
}

// esto es correcto
function despedirse(){
  return 'adios'
}

function vxd(calificacion = 0){
  // aprobado - desaprovado | opedaror ternario (condicion simple)
  if(calificacion >= 10.5 ){
    return('aprobado')

  }else{
    return('desaprobado')
  }
}

// opedaror ternario (condicion simple)
function veridicarNota(calificacion = 0){
  return calificacion >= 10.5 ? 'aprobado' : 'desaprobado'
}

// la funcion retorna en neto, incrementando +150 por cada hijo
function calcularNeto(sueldoBasico, numeroHijos){
  return sueldoBasico + (numeroHijos * 150)
}

// si tienes mas de 65 deberia devolver 'jubilaciona ctiva' sino 
// devolvera 'face laboral'
function verificarJubilacion(edad){
  // condicion ? valor_cumple : valor_no_cumple
  return edad > 65 ? 'jubilacion activa' : 'fase laboral'
}

// esta funcion recibe una lista de sueldos (no sabemos la caqntidad de elementos)
// tambien se debe indicar si obtendremos el mayor
// la funcion retorna el mayor o menor sueldo dependiendo de su configuracion
function analizarSueldos(listaSueldos = [], obtenerMayor = true){
  let resultado = 0
  if(obtenerMayor){
    listaSueldos.forEach(sueldo => {
      if(sueldo > resultado) resultado = sueldo
    });
  }else{
    resultado = listaSueldos[0]
    listaSueldos.forEach(sueldo => {
      if (sueldo < resultado) resultado = sueldo
    });
  }
  return resultado

}


function obtenerTelefonos(objeto = {}){
  return objeto.telefonos
}


function crearObjeto(apellidos = '', nombres = '', edad = 0){
  return {
    apellidos: apellidos,
    nombres: nombres,
    edad: edad
  }
}






const perfil = {
  nombre: "Jonathan Samir",
  dni: '89172635',
  telefonos: ['982763718','998989765']
}

console.log(obtenerTelefonos(perfil))


saludar()
console.log(despedirse())
console.log(veridicarNota(10))
console.log(calcularNeto(3500, 2))
console.log(verificarJubilacion(68))
console.log(analizarSueldos([3500, 1800, 4100, 3200]))
console.log(crearObjeto('Arteaga Leandro','Jonathan Samir',15))
