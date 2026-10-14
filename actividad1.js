// construir un objeto con los datos de una pelicula
const pelicula = {
  titulo : 'Spider-Man: Brand new day',
  anio: 2026,
  idiomas:['Ingles', 'Español', 'Portugues', 'latin', 'frances', 'chino', 'japones'],
  duracionMin: 145,
  generos: ['Aventuras', 'fantasía', 'acción', 'ciencia ficción', 'cine de superhéroes', 'comedia'],
  presupuesto: 225.000000,
  recaudacion: 2.000000000,
  elenco: [
    { nombre: "Tom Holland",   personaje: "Spider-Man",   rol:"Protagonista", },
    { nombre: "Zendaya",       personaje: "Michelle MJ",  rol:"novia de Parker", },
    { nombre: "Sadie Sink",    personaje: "Jean Grey",    rol:"Villana", },
    { nombre: "Jacob Batalon", personaje: "Ned Leeds",    rol:"Amigo de Parker", },
    { nombre: "Jon Bernthal",  personaje: "The Punisher", rol:"Ayudante de parker", },
    { nombre: "Mark Ruffalo",  personaje: "Bruce Banner", rol:"Profesor de parker", }
  ],
  sinopsis: 'Cuatro años después de los eventos en los que el mundo olvidó su identidad, Peter Parker',
  direccion: ['Destin Daniel Cretton'],
  escritores: ['Chris McKenna', 'Erik Sommers']
}

console.log(pelicula)