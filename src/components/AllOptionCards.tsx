import OptionCard from "./OptionCard";
import { optionsData } from "@/assets/data/optionsData";

type AllOptionCardsProps = {
  player: string;
  choicePlayer1: string;
  setChoicePlayer1: React.Dispatch<React.SetStateAction<string>>;
  choicePlayer2: string;
  setChoicePlayer2: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<
    React.SetStateAction<{ winner: string; sentence: string }>
  >;
  setScore1: React.Dispatch<React.SetStateAction<number>>;
  setScore2: React.Dispatch<React.SetStateAction<number>>;
  score: number;
};

export default function AllOptionCards({
  player,
  choicePlayer1,
  setChoicePlayer1,
  choicePlayer2,
  setChoicePlayer2,
  setResult,
  setScore1,
  setScore2,
  score,
}: AllOptionCardsProps) {
  return (
    <div className="flex flex-col">
      <h2 className="text-center">
        {player === "player1" ? "You" : "Sheldon"} - {score}
      </h2>
      <section className="relative h-[350px] w-[350px] bg-slate-500 p-2 rounded-full">
        {optionsData.map((item) => {
          return (
            <OptionCard
              info={item}
              player={player}
              key={item.alt}
              choicePlayer1={choicePlayer1}
              setChoicePlayer1={setChoicePlayer1}
              choicePlayer2={choicePlayer2}
              setChoicePlayer2={setChoicePlayer2}
              setResult={setResult}
              setScore1={setScore1}
              setScore2={setScore2}
            />
          );
        })}
      </section>
    </div>
  );
}
