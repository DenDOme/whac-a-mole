let squares = document.querySelectorAll('.square');
let mole = document.querySelector('.mole')
let timeDisp = document.querySelector('#time');
let scoreDisp = document.querySelector('#score');

let res = 0;        
let hitPos;
let currTime = 10;
let timerId = null;



function randSquare(){
    squares.forEach(squares => {
        squares.classList.remove('mole');
    });

    let randPos = squares[Math.floor(Math.random() * 9)];
    randPos.classList.add('mole');
    hitPos = randPos.id;
}
squares.forEach(square =>{
    square.addEventListener('mousedown', () =>  {
        if(square.id == hitPos){
            res++;
            scoreDisp.innerHTML = res;
            hitPos = null;
        }
    })
})
function moveMole(){
    
    timerId = setInterval(randSquare, 500);
}

moveMole()
function countDown(){
    currTime--;
    timeDisp.innerHTML = currTime;

    if(currTime == 0){
        clearInterval(timerId); 
        clearInterval(countDownId);
    }
}
let countDownId = setInterval(countDown, 1000);