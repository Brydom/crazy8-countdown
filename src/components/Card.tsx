import { RuleInterface } from "@/utils/interfaces";

interface CardProps {
  suit?: RuleInterface["suit"];
  value: RuleInterface["value"];
}

export default function Card({ suit, value }: CardProps) {
  const suitMap = {
    spades: "♠",
    hearts: "♥",
    diamonds: "♦",
    clubs: "♣",
    any: "",
  };

  return (
    <div className="badge flex gap-2 w-[50px] justify-center">
      {suitMap[suit!] && <span>{suitMap[suit!]}</span>}
      <span>{value}</span>
    </div>
  );
}
