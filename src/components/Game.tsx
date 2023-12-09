import AllOptionCards from "@/components/AllOptionCards";
import { useState, useEffect } from "react";
import { optionsData } from "@/assets/data/optionsData";

const Game = () => {
  const [choicePlayer1, setChoicePlayer1] = useState("");
  const [choicePlayer2, setChoicePlayer2] = useState("");

  useEffect(() => {
    const defineChoicePlayer2 = () => {
      if (choicePlayer1) {
        const player2Choice =
          optionsData[Math.floor(Math.random() * optionsData.length)].alt;
        setChoicePlayer2(player2Choice);
      }
    };
    defineChoicePlayer2();
  }, [choicePlayer1]);

  return (
    <div className="flex gap-20">
      <AllOptionCards
        player="player1"
        choice={choicePlayer1}
        setChoice={setChoicePlayer1}
      />
      <AllOptionCards
        player="player2"
        choice={choicePlayer2}
        setChoice={setChoicePlayer2}
      />
    </div>
  );
};

export default Game;
