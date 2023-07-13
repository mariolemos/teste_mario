let personagem
let grama
let tamanho = 64
let x = 64
let y = 64
let andarx = 0
let andary = 0
let velocidade = 64
let botao

function setup() {
  createCanvas(576, 576)
  personagem = loadImage("person.png")
  grama = loadImage("grass.png")
    
}

function draw(){
  background(320)
  if(andarx<0) {
    andarx = 0
  }
  if(andary<0){
    andary=0
  }
  if(andarx>tamanho*8){
      andarx=tamanho*8
  }
  if(andary>tamanho*8){
    andary=tamanho*8
  } 
  
  for(let i=0; i<9; i++){    
     for(let j=0; j<9; j++){    
      image(grama, x*i, x*j, tamanho, tamanho)
    }
  }
  image(personagem, andarx, andary, tamanho, tamanho)
  if(andarx === tamanho*8 && andary === tamanho*8){
    rect(150, 100, 156, 156)
    textSize(20)    
    text("Ganhou ", 180, 180)
    
    botao = createButton("Reiniciar")
    botao.position(150, 400)
    botao.mousePressed(reiniciar)
    botao.size(70,50)   
    noLoop()
  }
} 

function keyPressed() {
    if(keyIsDown(RIGHT_ARROW)){
      andarx += velocidade           
    }
      if(keyIsDown(LEFT_ARROW)){
      andarx -= velocidade
    }
     if(keyIsDown(UP_ARROW)){
      andary -= velocidade
    }
      if(keyIsDown(DOWN_ARROW)){
      andary += velocidade
    }
  }
function reiniciar(){
  andarx = 0
  andary = 0
  botao.remove()
  loop()
  
}