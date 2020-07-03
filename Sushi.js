function Sushi(x, y) { //function sushi starts
  /*set value*/
  this.x = x;
  this.y = y;
  this.r = random (15,50); //make sushi appear in different size

  this.xdir = 1; //direction of x

  this.decrease = function() {//how sushi will decrease on screen every time drops hits it
    this.r = this.r - 5; //value of radius is changed here to make the sushi decrease in size
     if(this.r<20){ //when radius is smaller than 20
      /*score*/
     	score=score+1; //player gains 1 points
     	this.y= 1000; //to remove the sushi off the screen
    } //radius function ends
  }; //decrease function ends

  this.shiftDown = function() { //how the sushi will move down
    this.xdir *= -1; //for sushi to go backward
    this.y += this.r; //for sushi to move down

  }; //shiftDown function ends

  this.move = function() { //how the sushi will move
    this.x = this.x + this.xdir; //how sushi will move to the direction
  }; //move function ends

  this.show = function() { //drawing sushi's shape
    /*components of sushi*/
    noStroke();fill(250);
    //shape of sushi
      ellipse(this.x, this.y, this.r * 2, this.r * 2);
    //sushi toppings  
      fill(245, 132, 98);
      ellipse(this.x, this.y, this.r * 1, this.r * 1);
  }; //sushi show ends
}//function sushi ends