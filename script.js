import {getRandomColor ,getRandomNumberBytowNumber } from "./utils.js" 



//mostatil

// c.translate(100,100)
// c.font = "30px verdana"
// c.fillText("heloo" , 0,0)
// c.fillStyle = "#27ea60"
// c.fillRect(100,0,100,100)
// c.fillRect(300,100,100,100)
// c.fillRect(500,0,100,100)

// line

// c.beginPath()
// c.lineTo(100,200)
// c.lineTo(200,100)
// c.lineTo(300,500)
// c.lineTo(400,200)
// c.closePath()
// c.stroke()

// sercle
// setInterval(()=>{
//     for(let i = 0 ; i<10 ; i++){
//         x = Math.random() * window.innerWidth;
//         y = Math.random() * window.innerHeight;
//         c.beginPath()
//         c.arc(x,y,50,0,2*Math.PI)
//         c.stroke()

//         }

// },500)


// c.clearRect(100,100,300,300)




// animation with html and css





// let ball = document.querySelector("#ball") ;
// let offset = 10 ;
// setInterval(()=>{
//     ball.style.left = offset + "px"
//     offset += 1
// },10);




// Animation whith requestAnimationFrame 


// let ball = document.querySelector("#ball") ;
// let offset = 10 ;
// function test (){
//     ball.style.left = offset + "px"
//     offset += 1
//     requestAnimationFrame(test)
// }
// test()





// set Animation with js/canvas

//get random
let can = document.querySelector("canvas")

can.width = window.innerWidth
can.height = window.innerHeight

let c = can.getContext("2d")



window.screen = {
    height : window.innerHeight,
    width :  window.innerWidth
}
window.mouse = {
    x : screen.width / 2 ,
    y : screen.height / 2
}

 
class Ball{
    constructor( x, y, dx , dy, r, color){
        this.friction= 0.8;
        this.gravity = 1 ;
        this.r = r || 20;
        this.x = x || getRandomNumberBytowNumber(0+this.r,window.innerWidth-this.r);
        this.y = y || getRandomNumberBytowNumber(0+this.r,window.innerHeight-this.r);      
        this.dx = dx || getRandomNumberBytowNumber(-10,10)//(Math.random( - 0.5)) * 10;
        this.dy = dy || getRandomNumberBytowNumber(-10,10)//(Math.random(- 0.5)) * 4;
        this.color = color || getRandomColor()
        this.draw();
    }
    draw(){
        c.beginPath()
        c.arc(this.x , this.y , this.r , 0 , 2 * Math.PI)
        c.fillStyle = this.color
        c.fill()
        
    }
    update(){
       
        
        if(this.y + this.r + this.dy >= screen.height){
            
            this.dy = - this.dy * this.friction
            this.dx = - this.dx * this.friction
        }
        else{
           this.dy += this.gravity
        }
        if(this.x + this.r + this.dx >= screen.width ||this.x - this.r + this.dx == 0){
            this.dx = -this.dx
        
        }
        this.y += this.dy
        this.x += this.dx
        
        
        this.draw()
    }
}
class canvas {
    constructor(){
    this.balls = []
    for(let i = 0 ; i < 30; i++){
        this.balls.push(new Ball())
     }
    }
    animate(){
    
        c.clearRect(0,0,window.innerWidth,window.innerHeight)
        this.balls.forEach(ball =>{
            ball.update()
        });
        requestAnimationFrame(this.animate.bind(this));
    }
}

let mycan = new canvas();
mycan.animate();




window.addEventListener("click" , (e)=>{
    mycan.balls.push(new Ball(e.clientX,e.clientY,))
})


// window.addEventListener("mousemove",(e)=>{
//     mycan.balls.forEach(ball=>{
//         mouse.x = e.clientX ;
//         mouse.y = e.clientY ;
//     })
// })

window.addEventListener("resize",(e)=>{
    can.width = innerWidth
    can.height = innerHeight
})