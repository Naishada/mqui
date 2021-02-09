var canva;
var gameState = 0;
var contestantCount;
var database;
var quiz;
var question;
var contestant;
function setup(){
  canvas = createCanvas(850,400);
}


function draw(){
  background("pink");

  if(contestantCount === 4){
    game.update(1);
}
  if(gameState === 1){
    game.play();
}
}
