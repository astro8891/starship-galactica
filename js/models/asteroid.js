function Asteroid(row, col){
  // this.id = 0;
  this.row = row;
  this.col = col;
  this.cell = $('#grid .row:nth-child('+this.row+') .cell:nth-child('+this.col+')');
}

// Asteroid.prototype.generateAsteroid = function(){
//   var new_asteroid = new Asteroid();
//   return new_asteroid;
// };

// Asteroid.prototype.spawnAsteroid = function(){
//   var asteroid = generateAsteroid();
//   var my_row = Math.round((Math.random() *25 ) + 1);
//   var my_cell = Math.round((Math.random() *50) + 1);
//   asteroid.cell = my_cell;
//   asteroid.row = my_row;
//   return asteroid;
// };

// function moveAsteroids(){
//   console.log( 'our asteroids ' + @asteroids );

// }
