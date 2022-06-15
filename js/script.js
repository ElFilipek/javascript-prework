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

    
    
    const displayResult = function(computerMove, playerMove) {
        printMessage('Komputer zagrał ' + computerMove + ' Ty, zagrałeś ' + playerMove);
        
        if( computerMove == 'kamień' && playerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        }
        else if( computerMove == 'papier' && playerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
        }
        else if( computerMove == 'nożyce' && playerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
        }
        else if( computerMove == 'papier' && playerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
            }
        else if( computerMove == playerMove ){
            printMessage('Remis!');
        }
        else {
            printMessage('Komputer wygrywa!');
        }
        return 'Dzięki za grę'
    }
    const computerMove = getMoveName(randomNumber);
    const playerMove = getMoveName(playerInput);

    const gameResult = displayResult(computerMove, playerMove);
    console.log(gameResult)
    printMessage(gameResult);
}

document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
});
}
