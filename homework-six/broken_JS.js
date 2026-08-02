// let playerChoice = document.getElementsByClassName('choice'); // Not needed — never used
let compArray = ['Rock', 'Paper', 'Scissors'];
let innerScore = 0;

function RPS(numb) {
  let compDecision = compArray[Math.floor(Math.random() * compArray.length)];

  document.getElementById('resultDecision').textContent =
    'The computer chose: ' + compDecision;

  //NOTE: If a tie, subtract -0.5

  if (numb === 0) {
    if (compDecision === 'Paper') {
      innerScore--;
    } else if (compDecision === 'Scissors') {
      innerScore++;
    } else {
      innerScore -= 0.5;
    }
  }

  if (numb === 1) {
    if (compDecision === 'Rock') {
      innerScore++;
    } else if (compDecision === 'Scissors') {
      innerScore--;
    } else {
      innerScore -= 0.5;
    }
  }

  if (numb === 2) {
    if (compDecision === 'Rock') {
      innerScore--;
    } else if (compDecision === 'Paper') {
      innerScore++;
    } else {
      innerScore -= 0.5;
    }
  }

  document.getElementById('Score').innerHTML = `Score: ${innerScore}`;
}
