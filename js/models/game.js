function Game(width,height){
 this.grid = new Grid(width,height);
 this.plane = new Plane(width, height);  //refactored this.grid.width => width
 this.asteroids = [];
};

Game.prototype.getNextPosition = function(keyCode, positions){
  var nextPosition;
  switch(keyCode) {
  case 104:
      nextPosition = positions[1];
      break;
  case 106:
      nextPosition = positions[3];
      break;
  case 107:
      nextPosition = positions[0];
      break;
  case 117:
      nextPosition = positions[2];
      break;
  default:
      nextPosition = positions[4]; //if the user presses any other key, position stays the same.
  }
  return nextPosition;
};

Game.prototype.outOfBounds = function(next_position){
  var x = next_position[0];
  var y = next_position[1];
  if ((x > 0 && x < this.grid.width + 1) && (y > 0 && y < this.grid.height + 1)){
    return false;
  } else {
    return true;
  }
};

Game.prototype.checkCollision = function(nextPosition){
   var position = $('#grid .row:nth-child('+nextPosition[1]+') .cell:nth-child('+nextPosition[0]+')');
   if (position.hasClass('asteroid')){
    return true;
   } else {
    return false;
   }
};


Game.prototype.endGame = function(){
  $(".audioDemo").trigger('play');
  // alert('OUCH !');
};

Game.prototype.generateAsteroid = function(){
  var asteroidRow = this.getRandomNumber(0 , this.grid.height);
  this.asteroids.push(new Asteroid(asteroidRow, this.grid.width));
};

Game.prototype.spawnAsteroids = function(){
  var numberOfAsteroids = this.getRandomNumber(0,10);
  for(var i = 0; i < numberOfAsteroids ; i++){
    this.generateAsteroid();
  }
};

Game.prototype.getRandomNumber = function(min, max){
// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
  return Math.floor(Math.random() * (max - min)) + min;
};


Game.prototype.animateAsteroid = function(callback) {
  setInterval(callback, 50);
};







