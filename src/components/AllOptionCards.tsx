import OptionCard from "./OptionCard";
import { optionsData } from "@/assets/data/optionsData";

export default function AllOptionCards() {
  return (
    <div>
      {optionsData.map((item) => {
        return (
          <OptionCard
            src={item.image}
            fallback={item.fallback}
            key={item.fallback}
          />
        );
      })}
    </div>
  );
}
