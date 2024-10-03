drops = []


function setup() {
  let cnv = createCanvas(innerWidth, innerHeight);
  p = createVector(random(width), 200)
  cnv.id('mycanvas');
 
}

function draw() {
  background(20);
   for (let i = 0; i < 5; i++){
    drops.push(new Drop(random(width), 0, 0))
  }
  
  for (let d of drops){
    d.show()
    d.update()
  }

}

class Drop{
  constructor(x, y){
    this.pos = createVector(x, y)
    this.vel = createVector(0, random(8, 11))
    this.length = random(20, 40)
    this.strength = random(60)
  }
  show(){
    stroke(255, this.strength)
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y-this.length)
  }
  
  update(){
    this.pos.add(this.vel)
    if (this.pos.y > height + 100){
      drops.shift()
    }
  }
  
}