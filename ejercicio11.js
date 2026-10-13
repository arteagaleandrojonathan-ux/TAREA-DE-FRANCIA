const persona = {
  apellidos: 'Arteaga Leandro',
  nombre: 'Jonathan samir',
  hablar: function() {
    return "Hola que tal"
  },
  location: {
    departamento: 'Ica',
    provincia: 'Chincha',
    distrito: 'Pueblo Nuevo',
    direccion: 'Satelite Primaveral',
    mostrar: function(){
      return `${this.departamento} - ${this.provincia} - ${this.distrito} - ${this.direccion}`
    }
  }
}




console.log(persona.hablar())
console.log(persona.location.departamento)
console.log(persona.location.mostrar())