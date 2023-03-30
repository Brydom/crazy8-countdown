import { RuleInterface } from "./interfaces";

interface RulesInterface {
  [key: string]: RuleInterface[];
}

const rules: RulesInterface = {
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

export default rules;
