let game=[];
let user = []
let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;
let h2= document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    user=[];
    level++;
    h2.innerText =`Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    game.push(randColor);
    btnFlash(randBtn);
}
function check(idx){
    if(user[idx]===game[idx]){
        if(user.length=game.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerText="Game over.Press Any Key to start Again!";
        reset();
        }
}
function btnPress(){
    let btn = this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    user.push(userColor);
    check(user.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    game=[];
    user=[];
    level=0;
}