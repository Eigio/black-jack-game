// This is Start Page
const startGameBtn = document.querySelector(".startGameBtn");


startGameBtn.onclick = function(){
    console.log("The game had started")
    document.querySelector(".startUpPage").style.display = "none";
    gamePage.style.display = "block"
}

// This is Game Page
const gamePage =document.querySelector(".gamePage");

const yourCardTotal = document.querySelector(".yourCardTotal");
const yourCard = document.querySelector(".yourCard");

const opponemtCardTotal = document.querySelector(".opponemtCardTotal");
const opponemtCard = document.querySelector(".opponemtCard");

const drawCardBtn = document.querySelector(".drawCardBtn");
const drawAnotherCardBtn = document.querySelector(".drawAnotherCardBtn");
const StartOverBtn = document.querySelector(".StartOverBtn");
const victoryOrDefeact = document.querySelector(".victoryOrDefeact")




drawCardBtn.onclick = function(){ 
    let yourfirstCard = Math.floor(Math.random()*12+1);
    let yourseconCard = Math.floor(Math.random()*12+1);
    let yourthirdCard = Math.floor(Math.random()*12+1);
    let opponemtfirstCard = Math.floor(Math.random()*12+1);
    let opponemtseconCard = Math.floor(Math.random()*12+1);
    let yourTotal = yourfirstCard + yourseconCard;
    let opponemtTotal = opponemtfirstCard + opponemtseconCard;

    yourCard.textContent = `${yourfirstCard} and ${yourseconCard}`
    yourCardTotal.textContent=yourTotal >21 ? `It ${yourTotal}, you had lost` : `The total is ${yourTotal}`

    opponemtCard.textContent = `${opponemtfirstCard} and ${opponemtseconCard}`
    opponemtCardTotal.textContent = `The total is ${opponemtTotal}`


    drawAnotherCardBtn.style.display = "inline-block"
    StartOverBtn.style.display = "inline-block"

    drawCardBtn.style.display = "none"

    victoryOrDefeact.textContent = yourTotal > opponemtTotal ?  "victory" : "defeat"

    if(yourTotal > 21){
        victoryOrDefeact.textContent = "defeat"
    }else if(yourTotal == 21){
        victoryOrDefeact.textContent = "Yor had won with the BLACK JACK!"
        drawAnotherCardBtn.style.display = "none"
    }else if(yourTotal == opponemtTotal){
        victoryOrDefeact.textContent = "This match is a tie"
    }
    else{
        victoryOrDefeact.textContent = yourTotal > opponemtTotal ?  "victory" : "defeat"
    }

    drawAnotherCardBtn.onclick = function(){
    console.log("MORE");
    yourTotal = yourfirstCard + yourseconCard + yourthirdCard;
    yourCard.textContent = `${yourfirstCard} , ${yourseconCard} and ${yourthirdCard}`
    yourCardTotal.textContent=yourTotal >21 ? `It ${yourTotal}, you had lost` : `The total is ${yourTotal}`
    drawAnotherCardBtn.style.display = "none"
    if(yourTotal > 21){
        victoryOrDefeact.textContent = "defeat"
    }else if(yourTotal == 21){
        victoryOrDefeact.textContent = "Yor had won with the BLACK JACK!"
    }else if(yourTotal == opponemtTotal){
        victoryOrDefeact.textContent = "This match is a tie"
    }else{
    victoryOrDefeact.textContent = yourTotal > opponemtTotal ?  "victory" : "defeat"
}
}
}

StartOverBtn.onclick =function(){
    drawCardBtn.style.display = "inline-block"
    StartOverBtn.style.display = "none"
    drawAnotherCardBtn.style.display = "none"
    yourCard.textContent ="NEW GAME"
    opponemtCard.textContent ="NEW GAME"
    yourCardTotal.textContent =""
    opponemtCardTotal.textContent =""
    victoryOrDefeact.textContent = ""
}

