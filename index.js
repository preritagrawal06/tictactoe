console.log('tic tac toe');

let music = new Audio('music.mp3');
let audioTurn = new Audio('ting.mp3');
let gameOver = new Audio('gameover.mp3');
let turn = "X";
let isGameOver = false;

//function to change turns
const changeTurn = ()=>{
    return turn === "X"?"O":"X"
}

//function to check who won
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxText');
    win = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,-45],
    ]

    win.forEach(e => {
        if ((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[1]].innerText===boxtexts[e[2]].innerText)&&(boxtexts[e[0]].innerText !=="")) {
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText+" won!!"
            isGameOver=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='200px';
            document.querySelector('.line').style.width='20vw';
            document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            setTimeout(() => {
                gameOver.play();
            }, 500);
        }
    });

}

//game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(box=>{
    let boxText = box.querySelector('.boxText');
    box.addEventListener('click',()=>{
        if (boxText.innerText==='') {
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName('info')[0].innerText = "turn for "+turn;   
            }
        }
    })
})

let reset = document.getElementById('reset');
reset.addEventListener('click',()=>{
    window.location.reload();
})