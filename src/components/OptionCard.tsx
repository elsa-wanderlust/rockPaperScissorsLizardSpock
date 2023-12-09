type OptionCardProps = {
  info: {
    image: string;
    alt: string;
    left: string;
    top: string;
  };
  player: string;
  choice: string;
  setChoice: React.Dispatch<React.SetStateAction<string>>;
};

export default function OptionCard({
  info,
  player,
  choice,
  setChoice,
}: OptionCardProps) {
  const { image, alt, left, top } = info;

  function handleClick() {
    if (player === "player1") {
      setChoice(alt);
    }
  }

  return (
    <div
      className={`p-2inline-block h-24 w-24 rounded-full bg-white absolute ${
        choice === alt && "border-4 border-red-800 border-solid"
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
