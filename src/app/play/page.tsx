"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SettingsInterface, RuleInterface } from "@/utils/interfaces";
import { setSetting } from "@/utils/helpers";
import Card from "@/components/Card";
import rules from "@/utils/rules";

export default function Play() {
  const [settings, setSettings] = useState<SettingsInterface>({
    rules: "bc",
    startsAt: 8,
    clockwise: true,
  });
  const [players, setPlayers] = useState<string[]>([]);
  const [playerCardCount, setPlayerCardCount] = useState<
    Record<string, number>
  >({});
  const [winner, setWinner] = useState<string>();

  const searchParams = useSearchParams();

  const handleClickPlayer = (player: string) => {
    setPlayerCardCount((prev) => {
      if (prev[player] - 1 === 0) {
        setWinner(player);
      }

      return {
        ...prev,
        [player]: prev[player] - 1,
      };
    });
  };

  useEffect(() => {
    setPlayers(searchParams.getAll("players"));

    if (searchParams.get("rules")) {
      setSettings((prev) => ({
        ...prev,
        rules: searchParams.get("rules")! as SettingsInterface["rules"],
      }));
    }

    if (searchParams.get("startsAt")) {
      setSettings((prev) => ({
        ...prev,
        startsAt: +searchParams.get("startsAt")!,
      }));
    }

    setPlayerCardCount(
      searchParams.getAll("players").reduce((acc, player) => {
        acc[player] = settings.startsAt;
        return acc;
      }, {} as Record<string, number>)
    );
  }, [searchParams, settings.startsAt]);

  return (
    <div className="flex-grow flex flex-col">
      <div>
        <p className="mb-8 text-2xl">{winner ? `${winner} wins!` : "Play"}</p>
        {!winner && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-4">
              {players.map((player) => (
                <button
                  className="button button--secondary"
                  key={player}
                  onClick={() => handleClickPlayer(player)}
                >
                  {player}: {playerCardCount[player]}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                className="button"
                onClick={() =>
                  setSetting(setSettings, "clockwise", !settings.clockwise)
                }
              >
                Play direction:{" "}
                {settings.clockwise ? "Clockwise" : "Counter-clockwise"}
              </button>
            </div>
          </div>
        )}
        <Link
          href={{
            pathname: "/play",
            query: {
              players: searchParams.getAll("players"),
              rules: settings.rules,
              startsAt: settings.startsAt,
            },
          }}
          className="button button--bland mt-6"
        >
          Restart
        </Link>
      </div>
      <div className="mt-auto flex flex-col gap-2 opacity-50 text-sm">
        {rules[settings.rules].map((rule: RuleInterface) => (
          <div
            className="gap-2 flex items-center"
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
