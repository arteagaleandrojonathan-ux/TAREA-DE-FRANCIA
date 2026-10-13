let frutas = [
  'Plátano', 
  'manzana', 
  'naranja', 
  'fresa', 
  'uva', 
  'limón', 
  'sandía', 
  'mango', 
  'piña', 
  'melocotón',
  'níspero'
]
//mostrar la lista invertira mostrando al ultimo el primero
for (let i = (frutas.length - 1); i < frutas.length; i++){
  console.log(frutas[i])
}

//verificar si existe un elemento = 'fresa'
let frutaBuscada = 'uva'
const resultado = frutas.find(fruta => fruta == frutaBuscada )
const encontrado = frutas.includes(frutaBuscada )
console.log(resultado, encontrado)