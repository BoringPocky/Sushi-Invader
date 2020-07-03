function Soysauce() { //soysauce function starts
  /*set number*/
  this.x = width / 2; //x coordinate
  this.xdir = 0; //x direction

  this.show = function() { //function show starts
    //this is where the ship is drawn
    fill(0); //fill in black
    stroke(255); //white for stroke 

    beginShape(); //shape of ship is drawn bass on the soysauce container
    //components of shape
    vertex(this.x,height-55); vertex(this.x+13,height-35); vertex(this.x+6,height-15); vertex(this.x+13,height-5);
    vertex(this.x-13,height-5); vertex(this.x-6,height-15); vertex(this.x-13,height-35);
    endShape(CLOSE); //shape of ship ends

    line(this.x+13,height-35,this.x-13,height-35); //line across

    /*eye of fish - soysauce container*/
    ellipse(this.x,height-43,3,3); noStroke(); fill(255,0,0);
    /*cap of soysauce*/
    rectMode(CENTER); rect(this.x, height - 53, 10, 8);
  }; //function show ends

  this.setDir = function(dir) { //how direction is set
    this.xdir = dir; //direction of ship wherever player moves ship to
  };

  this.move = function(dir) { //for ship to move whichever direction player move to
    this.x += this.xdir * 5; //speed of ship when moving

    }; //direction function ends
  }; //soysauce function ends
