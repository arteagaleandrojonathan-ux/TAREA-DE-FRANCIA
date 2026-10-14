// crear un objeto que contenga informacion computador
// cadenas, enteros, decimales, lógicos, arreglos, nuevos objetos

// arreglos: [];
// objetos: [{}{}{}]

const computadora = {
  marca: 'ASUS',
  modelo: 'LENOVO',
  anio: 2026,
  precio: 2900,
  sistemaOperativo: 'Windows 11',

  procesador: {
    marca: 'intel',
    modelo: 'Core i7',
    velocidadesGHz: 5.2
  },

  memoriaRAM: {
    capacidadGB: 512,
    tipo: 'DDRS',
    ampliable: true
  },

  puertos: [
    'USB-A', 'USB-C', 'HTML', 'Ethernet'
  ],

  accesorios: [
    {nombre: 'cargador', incluido: true},
    {nombre: 'Mouse', incluido: true}
  ],

  descripcion: 'Computador portátil para videojuegos y trabajo'
}
console.log(computadora)