//IMATGE INTERACTIVA

/// CANVIAR EL MODE ENTRE 1 i 4 /////////////////////////////////////////////////////////////
var MODE = 0;
/////////////////////////////////////////////////////////////////////////////////////////////


var animacio;

function preload() {
  //CREAR UNA ANIMACIO A PARTIR D'UNA SERIE D'IMATGES
  //EL NOM DELS ARXIUS ES MOOOOOLT IMPORTANT
  animacio = loadAnimation("libraries/asterisk_circle0000.png", "libraries/asterisk_circle0014.png");
  //animacio = loadAnimation("imatge0000.png", "assets/imatge0015.png");
}

// [SETUP] S'EXECUTA UN COP AL PRINCIPI
function setup() {
  // CREAR UNAZONA DE DIBUIX
  createCanvas(windowWidth,windowHeight); // AMPLADA, ALÇADA (en pixels)
  frameRate(60); // VELOCITAT D'ANIMACIO (en fotogrames per segon -máxims-)

  // MODES /////////////////////
  if (MODE == 3){
    animacio.looping = false;
  }
  else if (MODE == 4){
    animacio.playing = false;
  }
  else if (MODE == 5){
    animacio.playing = false;
  }
  //////////////////////////////
}




// DESPRÉS DE [SETUP] S'EXECUTA [DRAW] EN BUCLE (FINS A L'INFINIT)
function draw() {
  // REPINTAR EL FONS
  //background(255,255,255); // COLORS DE FONS, EN RGB (VERMELL, VERD, BLAU)



  // MODES /////////////////////
  // CONTROLA EL SEGÜENT FRAME A PINTAR
  if (MODE == 1){
    if(mouseIsPressed)
      animacio.play();
    else
      animacio.stop();
  }

  else if (MODE == 2){
    if(animacio.getFrame()==animacio.getLastFrame())
    animacio.changeFrame(7);

    if(mouseIsPressed)
      animacio.rewind();
  }

  else if (MODE == 3){
    if(mouseIsPressed)
    animacio.goToFrame(0);
    else
    animacio.goToFrame(animacio.getLastFrame());
  }

  else if (MODE == 4){
    if(mouseIsPressed)
      animacio.nextFrame();
  }

  else if (MODE == 5){

    animacio.changeFrame(constrain(floor(map(mouseX, 0, width, 0, animacio.getLastFrame())),0,animacio.getLastFrame()));
  }
  //////////////////////////////



  // PINTA EL FRAME QUE TOCA
  animation(animacio, mouseX, mouseY, 800, 800);
}
