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
        winOrLose=2;                        //승패 또는 무승부 여부 (승=1, 패=0, 무승부=2)
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

function game(){                            //playRound()함수를 5번 진행하고 승패 결과를 출력하는 함수
    let countPlayerScore= 0;                //플레이어와 컴퓨터의 점수 초기값=0
    let countComputerScore=0;
    for(let i=0; i<=4; i++){                //게임 5번 진행을 위한 반복문
        mySelection = prompt("Rock or Paper or Scissors?");
        console.log(playRound(mySelection,getComputerChoice()))
        if(winOrLose==0){
            countComputerScore= countComputerScore+1;
        }else if(winOrLose==1){
            countPlayerScore= countPlayerScore+1;
        }else{
            countPlayerScore= countPlayerScore+1;
            countComputerScore= countComputerScore+1;
        }
    }
    console.log(`Player: ${countPlayerScore}, Computer: ${countComputerScore}`);
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

