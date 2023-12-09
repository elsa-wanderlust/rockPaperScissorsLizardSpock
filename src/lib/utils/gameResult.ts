// function take 2 string arguments (choices of player1 and player2) and returns a object
// with the name of the winner and the sentence associated with that result

const rules = [
  { winner: "Scissors", looser: "Paper", sentence: "Scissors cuts Paper" },
  { winner: "Paper", looser: "Rock", sentence: "Paper covers Rock" },
  { winner: "Rock", looser: "Lizard", sentence: "Rock crushes Lizard" },
  { winner: "Lizard", looser: "Spock", sentence: "Lizard poisons Spock" },
  { winner: "Spock", looser: "Scissors", sentence: "Spock smashes Scissors" },
  {
    winner: "Scissors",
    looser: "Lizard",
    sentence: "Scissors decapitates Lizard",
  },
  { winner: "Lizard", looser: "Paper", sentence: "Lizard eats Paper" },
  { winner: "Paper", looser: "Spock", sentence: "Paper disproves Spock" },
  { winner: "Spock", looser: "Rock", sentence: "Spock vaporizes Rock" },
  { winner: "Rock", looser: "Scissors", sentence: "Rock crushes Scissors" },
];

function handleResult(player1: string, player2: string) {
  // if both player have chosen the same card
  if (player1 === player2) {
    return { winner: "none", sentence: "It's a tie" };
  } else {
    for (let i = 0; i < rules.length; i++) {
      // if player 1 has won
      if (player1 === rules[i].winner && player2 === rules[i].looser) {
        return { winner: "player1", sentence: rules[i].sentence };
      }
      // if player 2 has won
      if (player2 === rules[i].winner && player1 === rules[i].looser) {
        return { winner: "player2", sentence: rules[i].sentence };
      }
    }
  }
}

export default handleResult;
