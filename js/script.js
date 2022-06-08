function getMoveName(randomNumber, playerInput){
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

    if (playerInput == 1) {
        return 'kamień';
    }
    else if (playerInput == 2) {
        return 'papier';
    }
    else if (playerInput == 3) {
        return 'nożyce';
    }
    printMessage('Nie znam ruchu nr. ' + playerInput + '.');
        return 'nieznany ruch';
  }
function displayResult(computerMove, playerMove) {
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
    return 'koniec gry'
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to ' + randomNumber);
let computerMove = getMoveName(randomNumber);

let playerInput = prompt('wybierz swój ruch 1: kamień 2: papier 3: nożyce');
console.log('gracz wpisał ' + playerInput);
let playerMove = getMoveName(playerInput);

let gameResult = displayResult(computerMove, playerMove);
console.log(gameResult)
printMessage(gameResult);