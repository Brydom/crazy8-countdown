import { RuleInterface } from "./interfaces";

interface RulesetsInterface {
  [key: string]: RuleInterface[];
}

export const rulesets: RulesetsInterface = {
  bc: [
    {
      value: "J",
      action: "Skip next player",
    },
    {
      value: "A",
      action: "Reverse direction",
    },
    {
      value: 2,
      action: "Draw 2 cards",
    },
  ],
  mb: [
    {
      value: "J",
      suit: "clubs",
      action: "Draw 5 cards",
    },
    {
      value: "A",
      action: "Skip next player",
    },
    {
      value: 2,
      action: "Draw 2 cards",
    },
  ],
};

interface CardValueMapInterface {
  [key: number]: string | number;
}

export const cardValueMap: CardValueMapInterface = {
  13: "K",
  12: "Q",
  11: "J",
  10: 10,
  9: 9,
  8: 8,
  7: 7,
  6: 6,
  5: 5,
  4: 4,
  3: 3,
  2: 2,
  1: "A",
};
