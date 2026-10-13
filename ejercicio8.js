const alimentos = [
  ['Mango','Pera','Mandarina','Manzana','Papaya','uva'], //Frutas
  ['Lechuga','Tomate', 'zanahoria', 'pepino'], //vegetales
  ['Pollo', 'Pezcado', 'Res',], //carnes
  ['Lentejas', 'alberjita'] // cereales
]

// cuantos elementos tiene la matriz 4
console.log('La matriz tiene :', alimentos.length )


// cual es el array que tiene mas datos 5
let mayor = 0
alimentos.forEach(CategoriaAlimentos => {
  if (CategoriaAlimentos.length > mayor){
    mayor = CategoriaAlimentos.length
  }

});
console.log('El array mas grande contiene:', mayor)

// cual es el array de la matriz que tiene menos carnes 3
let menor = 0
alimentos.forEach(A => {
  if (A.length < mayor){
    menor = A.length
  }
});
console.log('El array mas pequeño contiene:', menor)


//cuantos elemnto en total tiene la matriz considerando todos sus elementos 15
let suma = 0
alimentos.forEach(total => {
  if (total.length > 0){
    suma += total.length
  }
});
console.log('La suma de todos los elementos de la matriz es de :',suma)