const peliculas = [

["The Shawshank Redemption", 
"The Godfather", 
"The Dark Knight", 
"Pulp Fiction", 
"Schindler's List"],

["The Lord of the Rings: The Return of the King",
 "Forrest Gump", "Inception", "The Matrix", 
 "Goodfellas"], 

 ["Seven", "Interstellar", 
 "Spirited Away", "The Silence of the Lambs", 
 "Saving Private Ryan"]
  
]

peliculas.forEach(element => {
  for(let i = 0; i < 5; i ++){
    console.log(element)
  }
});