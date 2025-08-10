let game=[];
let user=[];
let level=0,start=false;
let body=document.querySelector("body");
let p=document.querySelector("p");
let o=document.querySelector("#orange_red");
let g=document.querySelector("#green");
let b1=document.querySelector("#blue");
let y=document.querySelector("#yellow");
let btns=["orange_red","green","blue","yellow"];
document.addEventListener("keydown",function(event){
    if(start==false){
        console.log("Game started");
        start=true;
        level_f();
    }
})
function gameflash1(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },100);
}
function userflash1(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);
}
function level_f(){
    user=[];
    level++;
    p.style.position='absolute';
    p.style.left='46.5%';
    p.innerHTML=`<b>Level ${level}</b>`;
    let r=Math.floor(Math.random()*3);
    let ra_color=btns[r];
    let r_color=document.querySelector(`.${ra_color}`);
    game.push(ra_color);
    gameflash1(r_color);
}
function check(indx){
    if(user[indx]===game[indx]){
        if(user.length===game.length){
            setTimeout(level_f,1000);
        }
    }
    else{
        p.innerHTML=`Game Over. Your score is <b>${level}</b><br> Press any key to start again.<br>`;
        body.classList.add("wrong");
        setTimeout(function(){
            body.classList.remove("wrong");
        },150);
        p.style.position='absolute';
        p.style.left='40.5%';
        o.style.marginTop='160px';
        g.style.marginTop='160px';
        b1.style.marginTop='40px';
        y.style.marginTop='40px';
        reset();
    }
}
function press(){
    let b=this;
    userflash1(b);
    c=b.getAttribute("id");
    user.push(c);
    check(user.length-1);
}
let boxes=document.querySelectorAll(".box");
for(b of boxes){
    b.addEventListener("click",press);
}
function reset(){
    user=[];
    game=[];
    level=0;
    start=false;
}