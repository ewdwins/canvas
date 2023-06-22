import {getRandomColor ,getRandomNumberBytowNumber } from "./utils.js" 

let canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext("2d")

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

 
class Ball{
    constructor(x,y,color,rediuse=20){
        this.baseR=10;
        this.color=color;
        this.r = rediuse;
        this.x = x || getRandomNumberBytowNumber(0+this.r,window.innerWidth-this.r);
        this.y = y || getRandomNumberBytowNumber(0+this.r,window.innerHeight-this.r);      
        this.vx = (Math.random( - 0.5)) * 4;
        this.vy = (Math.random( - 0.5)) * 4;
        this.draw();
    }
    draw(){
        c.beginPath()
        c.fillStyle = getRandomColor() 
        c.arc(this.x , this.y , this.r , 0 , 2 * Math.PI)
        c.fillStyle = this.color
        c.fill()
        
    }
    update(){
        if(this.x+this.r > window.innerWidth || this.x - this.r < 0){
            this.vx = -this.vx
        }
        if(this.y+this.r > window.innerHeight || this.y - this.r < 0){
           this.vy = -this.vy
        }
    
    
        this.x +=this.vx;
        this.y +=this.vy;
        this.draw()
    }
}
let balls = []
for(let i = 0 ; i < 4 ; i++){
    const listColor = getRandomColor()
    const listRediuse =[20 , 30 , 40 ,100]
    balls.push(new Ball(20,30,listColor))
}

function animate(){
    c.clearRect(0,0,window.innerWidth,window.innerHeight)
    balls.forEach(ball =>{
        ball.update()
        
    });
    requestAnimationFrame(animate);
}



window.addEventListener("click" , (e)=>{
    balls.push(new Ball(e.clientX,e.clientY,getRandomColor(),getRandomNumberBytowNumber(0,30)))
})


window.addEventListener("mousemove",(e)=>{
    balls.forEach(ball=>{
        let distance = Math.sqrt(Math.pow(e.clientX - ball.x ,2) + Math.pow(e.clientY - ball.y ,2))
        if(distance < 100 && ball.r < ball.baseR * 4){
            ball.r += 1
            
        }
        else if (ball.r > ball.baseR){
            ball.r -= 1
        }
        }) 
})


window.addEventListener("resize",(e)=>{
    canvas.width = innerWidth
    canvas.height = innerHeight
})

  

animate();
