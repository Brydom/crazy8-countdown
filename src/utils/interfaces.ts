export interface SettingsInterface {
  rules: "bc" | "mb" | "standard";
  startsAt: number;
  clockwise?: boolean;
}

export interface RuleInterface {
  value: "A" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | "J" | "Q" | "K";
  suit?: "clubs" | "diamonds" | "hearts" | "spades";
  action: string;
}
