var numOfWon = 0;
var numOfLost = 0;
for (x = 0; x < 5; x++) {
    var guessNumber = parseInt(prompt('entet the number from 1 to 5'));
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    if (guessNumber == randomNumber) {
        document.write('<br> You have won this time random number was=' + randomNumber);
        numOfWon++;

    } else {
        document.write('<br> You have lost this time random number was=' + randomNumber);
        numOfLost++;
    }
}
document.write('<br> You have won =' + numOfWon + 'times');
document.write('<br> You have lost=' + numOfLost + 'times');