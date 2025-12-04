/*let direction = {x:0, y:0};
let foodSound = new Audio('food.mp3');
let gameOverSound =new Audio('gameover.mp3');
let moveSound = new Audio('move.mp3');
let musicSound = new Audio('music.mp3');
/*/
let speed =2;
let lastpaintTime =0;
let snakeArr =[
    {x :13, y: 15}
]

// Game function 
function main(ctime) {
    window.requestAnimationFrame(main);
    if((ctime - lastpaintTime)/1000 <1/speed){
        return;
    }
    lastpaintTime =ctime;

    console.log(ctime)
    gameEngine();

}
function gameEngine(){
    // part 1: Updating the snak array & food


    //part 2: Disply the snak and food
    board.innerHTML ="";
    snakeArr.forEach((e ,index)=>{
        snakeElement = document.createElement('container')
        snakeElement.style.gridRowStart = e,y;
        snakeElement.style.girdColumnStart =e.x;
        snakeElement.classList.add('food')
        board.appendChild(snakeElemnt);

    })

}