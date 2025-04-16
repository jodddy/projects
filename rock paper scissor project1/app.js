
let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");


const genComp=() =>{
    const options=["rock","paper","scissor"]
    const randoidx=Math.floor(Math.random() *3);
    return options[randoidx];
}

 const drawgame=()=>{
    console.log("game was draw");
    msg.innerText = "game was draw play again";
    msg.style.backgroundColor = "#081b31";

 }

 const showin=(userwin,userChoice,compchoice)=>{
    if(userwin){
        userscore++;
        userScorepara.innerText=userscore;
        msg.innerText = `you win .your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compScorepara.innerText=compscore;

        msg.innerText = `you lose ${compchoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";

    }

 }

const playgame=(userChoice) =>{
    console.log("userChoice",userChoice);
    const compchoice=genComp();
    console.log("compchoice",compchoice);
     
    if(userChoice === compchoice){
        // Draw game
        drawgame();
    } else{ 
        let userwin=true;
        if(userChoice==="rock"){
            userwin=compchoice==="paper"? false:true;
        } 
        else if(userChoice==="paper"){
        
            userwin=compchoice==="Scissor"?false:true;
        } else {
            userwin=compchoice==="rock"?false:true;
        }
        showin(userwin,userChoice,compchoice);
    }
}
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
       playgame(userChoice);
    });
});
    