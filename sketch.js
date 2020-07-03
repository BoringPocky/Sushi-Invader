//REFERENCE CODE https://www.youtube.com/watch?v=biN3v3ef-Y0&t=869s
var score = 0; //referencing from https://www.openprocessing.org/sketch/924505
  //initial score
var sushis = []; //sushi on the screen
var soydrops = []; //bullet
var soysauce; //spaceship

function setup() { //setup starts
  createCanvas(700, 500); //where the game will be
  
  soysauce = new Soysauce(); //class of soysauce is created

  for (var i = 0; i < 16; i++) { //where sushis are arranged


  		sushis[i] = new Sushi(i * 80 - 600,random(50,300)); //8 sushis are arranged on top
  
  }

  for (var i = 0; i < 8; i++) { //8 sushis are arranged at the bottom

  		sushis[i] = new Sushi(i * 80 +40,random(40,300)); //position are random to create more challenge to shoot the target
}

} //setup ends

function draw() { //draw starts
  background(51); //set colour for background

  for (var i = 0; i < soydrops.length; i++) {
    //This is the function for the bullet
    soydrops[i].show(); //the bullets are showed
    soydrops[i].move(); //how the bullets will move
    for (var j = 0; j < sushis.length; j++) {
      //this is what will happen when the bullets hit the sushis
      if (soydrops[i].hits(sushis[j])) { //condition
        sushis[j].decrease(); //sushi will start to decrease
        soydrops[i].disappear(); //bullet will disappear
      } //condition end
    } //bullet hits sushis ends
   
  } //bullet function ends
  soysauce.show(); //soysauce - function show
  soysauce.move(); //soysauce - function move
  drawScore(); //where score will be drawn



  var edge = false; //boolean
    //edge is false

  for (var i = 0; i < sushis.length; i++) { //if sushis' length is larger than sushis
    sushis[i].show(); //sushis are showed and
    sushis[i].move(); //sushi will move
    if (sushis[i].x > width || sushis[i].x < 0) { 
    //when the sushis moves more than the screen and less than the screen
      edge = true; //sushis will move down
    }
  }

  if (edge) { //function for edge
    for (var i = 0; i < sushis.length; i++) { //if sushis' length is larger than sushis
      sushis[i].shiftDown(); //sushis will move down
    }
  } //function for edge ends

  for (var i = soydrops.length - 1; i >= 0; i--) { //delete function starts

    if (soydrops[i].toDelete) { //bullets will disappear upon hitting the sushi
      soydrops.splice(i, 1); //bullets will then disappear
    }
  } //delete function ends
} //draw ends 


function keyReleased() { //key function starts
  if (key != ' ') { //when any keys are let go 
    soysauce.setDir(0); //it will stop at its path
  }
} //key function ends

function keyPressed() { //keyPressed starts
  if (key === ' ') { //when press space
    var soydrop = new soyDrop(soysauce.x, height); //bullet will shoot out
    soydrops.push(soydrop);
  }
  if (key === 'r'){ //when press r
  	location.reload(); //page will be reload
  }
  
  if (keyCode === RIGHT_ARROW) { //when press right arrow
    soysauce.setDir(1); //ship will goes right on the screen
  } else if (keyCode === LEFT_ARROW) { //when press left arrow
    soysauce.setDir(-1); //ship will goes left on the screen
  } //since ship is set half of the width of the canvas

} //keyPressed ends

function drawScore() { //drawScore starts
  /*style of score*/
	textSize(30); //size is 30px
  fill(250); //white colour
  noStroke(); //no stroke
  text(score, width / 2, 40); //how the score will locate on the page
  if(score >= 16){ //when player reach 16 points
  		win(); //run win function
    } //score condition ends
} //drawScore ends

function win(){ //function win starts
	background(35, 145, 204); //blue
	fill(250); //white
	/*win messafe*/
	textSize(40); //size of text is 40px
	text('YOU WIN', width/2-85, 225); //where the text is located on the canvas
	/*reload text*/
	textSize(20); //text size is 20px
	text('Press r to Play Again', width/2-88, 275); //where the text is located on the canvas
    //instruction of how to reload the screen
}//close win





