const paises = [
  ['Perú','Colombia','Brasil','Argentina'], // america
  ['España','Francia','Portugal','Inglaterra'], // europa
  ['Japon','China','Tilandia','India'], // asia
  ['Egipto','Nigeria','Sudafrica','Kenia'] // africa
]

//mostrar los paises de asia utilizando foreach

paises[2].forEach(element => {
  console.log(element)
  
});

// agregar 2 paices en la lista de america

paises[0].push('Bolivia')
paises[0].push('Ecuador')

console.log('----------------------------------')
//mostrar solo los paices de america
paises[0].forEach(pais => {
  console.log(pais)
})