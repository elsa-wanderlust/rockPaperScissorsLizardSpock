import AllOptionCards from "@/components/AllOptionCards";
import { useState } from "react";
// import { optionsData } from "@/assets/data/optionsData";
// import gameResult from "@/lib/utils/gameResult";

const Game = () => {
  const [choicePlayer1, setChoicePlayer1] = useState<string>("");
  const [choicePlayer2, setChoicePlayer2] = useState<string>("");
  const [result, setResult] = useState<{ winner: string; sentence: string }>({
    winner: "",
    sentence: "",
  });

  return (
    <div>
      <div className="flex gap-20">
        <AllOptionCards
          player="player1"
          choicePlayer1={choicePlayer1}
          setChoicePlayer1={setChoicePlayer1}
          choicePlayer2={choicePlayer2}
          setChoicePlayer2={setChoicePlayer2}
          setResult={setResult}
        />
        <AllOptionCards
          player="player2"
          choicePlayer1={choicePlayer1}
          setChoicePlayer1={setChoicePlayer1}
          choicePlayer2={choicePlayer2}
          setChoicePlayer2={setChoicePlayer2}
          setResult={setResult}
        />
      </div>
      <p>
        {result.winner === "player1"
          ? "You won!"
          : result.winner === "player2"
          ? "You lost!"
          : null}
      </p>
      <p>{result.sentence}</p>
    </div>
  );
};

export default Game;
