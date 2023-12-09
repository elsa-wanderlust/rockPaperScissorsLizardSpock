import OptionCard from "./OptionCard";
import { optionsData } from "@/assets/data/optionsData";

type AllOptionCardsProps = {
  player: string;
  choice: string;
  setChoice: React.Dispatch<React.SetStateAction<string>>;
};

export default function AllOptionCards({
  player,
  choice,
  setChoice,
}: AllOptionCardsProps) {
  return (
    <div className="flex flex-col">
      <h2 className="text-center">{player}</h2>
      <section className="relative h-[350px] w-[350px] bg-slate-500 p-2 rounded-full">
        {optionsData.map((item) => {
          return (
            <OptionCard
              info={item}
              player={player}
              key={item.alt}
              choice={choice}
              setChoice={setChoice}
            />
          );
        })}
      </section>
    </div>
  );
}
