'use strict';

const decisions = [
  'Are you a boy(0) or a girl(1)?',
  'Which starter do you choose: Bulbasaur(0) or Charmander(1)?',
  'Which starter do you choose: Squirtle(0) or Pikachu(1)?',
  'Do you explore Viridian Forest(0) or challenge the Pewter City Gym(1)?',
  'Do you search for wild Pokémon(0) or battle another trainer(1)?',
  'Do you head toward Cerulean City(0) or explore Mt. Moon(1)?',
  'Do you train your Pokémon(0) or look for a new teammate(1)?',
  'Do you catch a Caterpie(0) or a Pikachu(1)?',
  'Do you battle Brock(0) or keep training first(1)?',
  'Do you catch a Zubat(0) or search for a rare Clefairy(1)?',
  'Do you challenge Misty(0) or explore Cerulean City(1)?',
  'Do you battle Team Rocket(0) or sneak past them(1)?',
  'Do you evolve your starter(0) or keep it as it is(1)?',
  'Do you enter the Pokémon League(0) or keep collecting badges(1)?',
  'Do you become a Pokémon Champion(0) or continue exploring the world(1)?',
];

alert(
  'Welcome to Choose Your Own Adventure! For the following questions, input 0 for the first choice or 1 for the second.',
);

// I didn't even want to think about input validation.
const playGame = function () {
  const decision1 = Number(prompt(decisions[0]));

  if (decision1 === 0) {
    const decision2 = Number(prompt(decisions[1]));

    if (decision2 === 0) {
      const decision4 = Number(prompt(decisions[3]));

      if (decision4 === 0) {
        const decision8 = Number(prompt(decisions[7]));
      } else {
        const decision9 = Number(prompt(decisions[8]));
      }
    } else {
      const decision5 = Number(prompt(decisions[4]));

      if (decision5 === 0) {
        const decision10 = Number(prompt(decisions[9]));
      } else {
        const decision11 = Number(prompt(decisions[10]));
      }
    }
  } else {
    const decision3 = Number(prompt(decisions[2]));

    if (decision3 === 0) {
      const decision6 = Number(prompt(decisions[5]));

      if (decision6 === 0) {
        const decision12 = Number(prompt(decisions[11]));
      } else {
        const decision13 = Number(prompt(decisions[12]));
      }
    } else {
      const decision7 = Number(prompt(decisions[6]));

      if (decision7 === 0) {
        const decision14 = Number(prompt(decisions[13]));
      } else {
        const decision15 = Number(prompt(decisions[14]));
      }
    }
  }

  const playAgain = Number(prompt('Do you want to play again? No(0) Yes(1)'));
  if (playAgain === 1) playGame();
};

playGame();
