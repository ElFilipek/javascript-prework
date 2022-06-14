{
const playGame = function(playerInput){
    clearMessages()

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to ' + randomNumber);

    const getMoveName = function(randomNumber){
        if(randomNumber == 1){
        return 'kamień';
        }
        else if (randomNumber == 2) {
            return 'papier';
        }
        else if (randomNumber == 3) {
            return 'nożyce';
        }
    
        printMessage('Nie znam ruchu o id ' + randomNumber + '.');
            return 'nieznany ruch';
    
    }

    const computerMove = getMoveName(randomNumber);
    const playerMove = getMoveName(playerInput);
    
    const displayResult = function(computerMove, playerMove) {
        printMessage('Komputer zagrał ' + computerMove + ' Ty, zagrałeś ' + playerMove);
        
        if( computerMove == 'kamień' && playerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        }
        else if( computerMove == 'kamień' && playerMove == 'kamień'){
            printMessage('Remis!');
        }
        else if( computerMove == 'kamień' && playerMove == 'nożyce'){
            printMessage('Komputer wygrywa!');
        }
        else if( computerMove == 'papier' && playerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
            }
        else if( computerMove == 'papier' && playerMove == 'kamień'){
            printMessage('Komputer wygrywa!');
        }
        else if( computerMove == 'papier' && playerMove == 'papier'){
            printMessage('Remis!');
        }
        else if( computerMove == 'nożyce' && playerMove == 'papier'){
            printMessage('Komputer wygrywa!');
        }
        else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
            printMessage('Remis!');
        }
        else if( computerMove == 'nożyce' && playerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
        }
        else {
            printMessage('została wybrana nieprawidłowa liczba');
        }
        return 'Dzięki za grę'
    }

    const gameResult = displayResult(computerMove, playerMove);
    console.log(gameResult)
    printMessage(gameResult);
}

const rockClicked = function(){
    playGame(1);
  }
  
  const rockButton = document.getElementById('play-rock');
  
  rockButton.addEventListener('click', rockClicked);
 
const paperClicked = function() {
    playGame(2);
  }
  
  const paperButton = document.getElementById('play-paper');
  
  paperButton.addEventListener('click', paperClicked);

const scissorsClicked = function(){
    playGame(3);
  }
  
  const scissorsButton = document.getElementById('play-scissors');
  
  scissorsButton.addEventListener('click', scissorsClicked);
}
