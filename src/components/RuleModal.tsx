import { RuleInterface, SettingsInterface } from "@/utils/interfaces";
import { rulesets } from "@/utils/const";
import { useRef, useState } from "react";
import clsx from "clsx";
import Card from "./Card";
import { useClickOutside } from "@/utils/hooks";

interface RuleModalProps {
  rules: SettingsInterface["rules"];
}

interface RuleModalState {
  open: boolean;
}

export default function RuleModal({ rules }: RuleModalProps) {
  const ruleModalRef = useRef<HTMLInputElement>(null);
  const ruleset = rulesets[rules];
  const [open, setOpen] = useState<RuleModalState["open"]>(false);
  const [hovering, setHovering] = useState<Boolean>(false);

  useClickOutside(ruleModalRef, () => setOpen(false));

  const handleClickModal = () => {
    if (hovering && !open) setOpen(true);
  };

  return (
    <div ref={ruleModalRef} className="relative h-[7rem] mt-auto">
      <div
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onClick={handleClickModal}
        id="test"
        className={clsx(
          "mt-8 h-screen flex flex-col items-start gap-4 transition-transform bg-reverse-light z-10 rounded-xl p-6 duration-700 absolute top-0 left-0 w-full",
          open ? "-translate-y-[calc(100%-7rem)]" : "-translate-y-0",
          {
            "-translate-y-12 cursor-pointer": hovering && !open,
          }
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
    </div>
  );
}
