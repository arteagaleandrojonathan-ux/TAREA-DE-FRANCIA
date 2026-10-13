// objetos = JSON (java scrip object notation)
// Estructura que guarda datos utilizando {key: value}

let perfil = {
  apellidos: "Arteaga Leandro",
  nombres: "Jonathan",
  edad: 18,
  telefono:  ['991862734', '989267315', '971846376'],
  formacion: [
    { nivel: 'Primaria',   nombre: "san jose", anio: 2000},
    { nivel: 'Secundaria', nombre: "Industrial", anio: 2024},
    { nivel: 'Superior',   nombre: 'SENATI', anio: 2026}
  ],
  habilidades:[
    { skill: "Base de datos",          herramientas: ['Mysql', 'Oracle', 'SQLite']},
    { skill: "Lenguajes programacion", herramientas: ['JavaScript', 'PHP', 'Java', 'C#', 'Python']},
    { skill: "Sistemas operativos",    herramientas: ['Windows', 'Linux', 'Android']}
  ]
}
//quiero mostrar mis habilidades en programación
console.log(perfil.habilidades[1].herramientas)

console.log('------------------------')


//cual es el nombre del centro de formacion de secundaria
console.log (perfil.formacion[1].nombre)

console.log('------------------------')


//cuantos telefonos tiene la persona
console.log(perfil.telefono.length)

console.log('------------------------')


//mostrar cada uno de los motores de base de datos
const lista = perfil.habilidades[0].herramientas
lista.forEach(element => {
  console.log(element)
});