function soyDrop(x, y) { //bullet function starts
  /*set value*/
  this.x = x; //x-cordinate
  this.y = y; //y-cordinate
  this.r = 8; //radius of ellipse
  this.toDelete = false; //initialize stage of bullet

  this.show = function() { //show starts
    //this is where the bullet is showed
    noStroke(); fill(0); ellipse(this.x, this.y,15, 15); //bullet components
  }; //show ends

  this.disappear = function() { //when bullet is dissapear
    this.toDelete = true; //toDelete becomes true changing the stage of bullet
  }; //dissapear function ends

  this.hits = function(sushi) { //hit funciton starts
    var d = dist(this.x, this.y, sushi.x, sushi.y);
    if (d < this.r + sushi.r) { //how the hit function will perform once the hits is smaller than the radius of sushi and radius of bullet
      return true; //bullet is then disapear 
    } else {
      return false; //then return back to its original place - where the ship is
    }
  };

  this.move = function() {this.y = this.y - 5;};
    //bullet is moving up on the screen upon release
} //bullet function ends