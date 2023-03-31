import { RuleInterface, SettingsInterface } from "@/utils/interfaces";
import { rulesets } from "@/utils/const";
import { useState } from "react";
import clsx from "clsx";
import Card from "./Card";

interface RuleModalProps {
  rules: SettingsInterface["rules"];
}

interface RuleModalState {
  open: boolean;
}

export default function RuleModal({ rules }: RuleModalProps) {
  const ruleset = rulesets[rules];
  const [open, setOpen] = useState<RuleModalState["open"]>(false);

  return (
    <div
      id="test"
      className={clsx(
        "h-screen flex flex-col items-start gap-4 transition-transform bg-reverse-light absolute top-0 left-0 w-full z-10 rounded-xl p-6 duration-700",
        open ? "translate-y-0" : "translate-y-[70%]"
      )}
    >
      <button
        className={clsx(
          "button button--bland transition-transform",
          open ? "rotate-180" : "rotate-0"
        )}
        onClick={() => setOpen(!open)}
      >
        &uarr;
      </button>

      {ruleset.map((rule: RuleInterface) => (
        <div
          className="flex items-center gap-2"
          key={`${rule.suit}-${rule.value}`}
        >
          <Card suit={rule.suit} value={rule.value} />
          <p>{rule.action}</p>
        </div>
      ))}
    </div>
  );
}
