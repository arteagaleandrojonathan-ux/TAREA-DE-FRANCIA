let edades = [
  "23", "45", "18", "56", "32", 
  "27", "60", "41", "19", "38", 
  "52", "29", "47", "35", "24"
]

// calcular al mayor

let mayor = 0
let menor = edades[0]
let promedio = 0

edades.forEach(m => {
  if (m  > mayor){
    mayor = m
  }
  if (m < menor){
    menor = m
  }
  promedio += m
});
promedio = (promedio / edades.length).toFixed(2)

console.log('Ttoal edades :', edades.length)
console.log('La mayor edad es :', mayor)
console.log('La menor edad es :', menor)
console.log('El promedio es :', promedio)
