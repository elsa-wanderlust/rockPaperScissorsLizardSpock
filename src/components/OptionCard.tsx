import { optionsData } from "@/assets/data/optionsData";
import gameResult from "@/lib/utils/gameResult";

type OptionCardProps = {
  info: {
    image: string;
    alt: string;
    left: string;
    top: string;
  };
  player: string;
  choicePlayer1: string;
  setChoicePlayer1: React.Dispatch<React.SetStateAction<string>>;
  choicePlayer2: string;
  setChoicePlayer2: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<
    React.SetStateAction<{ winner: string; sentence: string }>
  >;
};

export default function OptionCard({
  info,
  player,
  choicePlayer1,
  setChoicePlayer1,
  choicePlayer2,
  setChoicePlayer2,
  setResult,
}: OptionCardProps) {
  const { image, alt, left, top } = info;

  function handleClick() {
    if (player === "player1") {
      const player2Choice =
        optionsData[Math.floor(Math.random() * optionsData.length)].alt;
      const result = gameResult(alt, player2Choice);
      setResult(result ? result : { winner: "", sentence: "string" });
      setChoicePlayer1(alt);
      setChoicePlayer2(player2Choice);
    }
  }

  return (
    <div
      className={`p-2inline-block h-24 w-24 rounded-full bg-white absolute ${
        choicePlayer1 === alt &&
        player === "player1" &&
        "border-4 border-red-800 border-solid"
      } ${
        choicePlayer2 === alt &&
        player === "player2" &&
        "border-4 border-green-800 border-solid"
      }`}
      style={{ top: top, left: left }}
      onClick={handleClick}
    >
      <img
        className="inline-block h-24 w-24 object-contain rounded-full"
        src={image}
        alt={alt}
      />
    </div>
  );
}
