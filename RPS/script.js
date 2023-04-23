function getComputerChoice(){               //컴퓨터가 가위 바위 보중 하나를 랜덤으로 선택하는 함수
    let rps = ['rock', 'paper', 'scissors'];
    let rpsIndex = Math.floor(Math.random()*3);

    return rps[rpsIndex];
}

function playRound(playerSelection, computerSelection){
    playerSelection.toLowerCase();
    const lose= `You lose! ${computerSelection} beats ${playerSelection} `;
    const win = `You win! ${playerSelection} beats ${computerSelection}`;
    
    if(playerSelection==computerSelection){ //플레이어와 컴퓨터의 선택이 같을 때
        return "Tie!"
    }else if(playerSelection=="rock"){      //플레이어가 바위를 선택했을 때
        if(computerSelection=="paper"){
            winOrLose=0;
            return lose;
        }else {
            winOrLose=1;
            return  win;
        }
    }else if(playerSelection=="paper"){     //플레이어가 보를 선택했을 때
        if(computerSelection=="scissors"){
            winOrLose=0;
            return lose;
        }else {
            winOrLose=1;
            return win;
        }
    }else if(playerSelection=="scissors"){
        if(computerSelection=="rock"){
            winOrLose=0;
            return lose;
        }else {
            winOrLose=1;
            return win;
        }
    }else {                                 //플레이어가 가위 바위 보 말고 다른 텍스트를 입력했을 때
        let mySelectionAgain = prompt("Enter rock or paper or scissors.");
        console.log(playRound(mySelectionAgain,getComputerChoice()));
    }
}

function game(){
    let countPlayerScore= 0;
    let countComputerScore=0;
    for(let i=0; i<=4; i++){
        mySelection = prompt("Rock or Paper or Scissors?");
        console.log(playRound(mySelection,getComputerChoice()))
        if(winOrLose==0){
            countComputerScore= countComputerScore+1;
        }else if(winOrLose==1){
            countPlayerScore= countPlayerScore+1;
        }
    }
    console.log(`Player: ${countPlayerScore}, Coumputer: ${countComputerScore}`);
    if(countPlayerScore==countComputerScore){
        console.log('tie..');
    }else if(countPlayerScore>countComputerScore){
        console.log('you are the winner!');
    }else{
        console.log('you defeated');
    }
}
let winOrLose;
let mySelection;
game();


