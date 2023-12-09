const rules = [
  { playerA: "Scissors", playerB: "Paper", sentence: "Scissors cuts Paper" },
  { playerA: "Paper", playerB: "Rock", sentence: "Paper covers Rock" },
  { playerA: "Rock", playerB: "Lizard", sentence: "Rock crushes Lizard" },
  { playerA: "Lizard", playerB: "Spock", sentence: "Lizard poisons Spock" },
  { playerA: "Spock", playerB: "Scissors", sentence: "Spock smashes Scissors" },
  {
    playerA: "Scissors",
    playerB: "Lizard",
    sentence: "Scissors decapitates Lizard",
  },
  { playerA: "Lizard", playerB: "Paper", sentence: "Lizard eats Paper" },
  { playerA: "Paper", playerB: "Spock", sentence: "Paper disproves Spock" },
  { playerA: "Spock", playerB: "Rock", sentence: "Spock vaporizes Rock" },
  { playerA: "Rock", playerB: "Scissors", sentence: "Rock crushes Scissors" },
];

function handleResult(player1: string, player2: string) {
  //   let sentence: string = "";
  //   let winner: string = "";
  if (player1 === player2) {
    return { winner: "none", sentence: "it's a tie" };
  } else {
    for (let i = 0; i < rules.length; i++) {
      if (player1 === rules[i].playerA && player2 === rules[i].playerB) {
        return { winner: "player1", sentence: rules[i].sentence };
      }
      if (player2 === rules[i].playerA && player1 === rules[i].playerB) {
        return { winner: "player2", sentence: rules[i].sentence };
      }
    }
  }
  return;
}

export default handleResult;
