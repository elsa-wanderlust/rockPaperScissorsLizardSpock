import AllOptionCards from "@/components/AllOptionCards";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Game = () => {
  const [choicePlayer1, setChoicePlayer1] = useState<string>("");
  const [choicePlayer2, setChoicePlayer2] = useState<string>("");
  const [result, setResult] = useState<{ winner: string; sentence: string }>({
    winner: "",
    sentence: "",
  });
  const [score1, setScore1] = useState<number>(0);
  const [score2, setScore2] = useState<number>(0);

  function reset() {
    setChoicePlayer1(""),
      setChoicePlayer2(""),
      setResult({
        winner: "",
        sentence: "",
      });
    setScore1(0);
    setScore2(0);
  }

  return (
    <div>
      <section className="flex gap-20">
        <AllOptionCards
          player="player1"
          choicePlayer1={choicePlayer1}
          setChoicePlayer1={setChoicePlayer1}
          choicePlayer2={choicePlayer2}
          setChoicePlayer2={setChoicePlayer2}
          setResult={setResult}
          setScore1={setScore1}
          setScore2={setScore2}
          score={score1}
        />
        <AllOptionCards
          player="player2"
          choicePlayer1={choicePlayer1}
          setChoicePlayer1={setChoicePlayer1}
          choicePlayer2={choicePlayer2}
          setChoicePlayer2={setChoicePlayer2}
          setResult={setResult}
          setScore1={setScore1}
          setScore2={setScore2}
          score={score2}
        />
      </section>
      <section className="flex flex-col items-center justify-center">
        <h4>
          {result.winner === "player1"
            ? "You won!"
            : result.winner === "player2"
            ? "You lost!"
            : null}{" "}
          {result.sentence}
        </h4>
        <Button
          onClick={reset}
          className={`bg-green-950`}
          disabled={!score1 && !score2 ? true : false}
        >
          Reset
        </Button>
      </section>
    </div>
  );
};

export default Game;
