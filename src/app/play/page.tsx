"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { SettingsInterface } from "@/utils/interfaces";
import { cardValueMap } from "@/utils/const";
import RuleModal from "@/components/RuleModal";

export default function Play() {
  const searchParams = useSearchParams();

  const [settings, setSettings] = useState<SettingsInterface>({
    rules: (searchParams.get("rules") as SettingsInterface["rules"]) || "bc",
    startsAt: +(searchParams.get("startsAt") || 8),
    clockwise: true,
  });
  const [players, setPlayers] = useState<string[]>([]);
  const [playerCardCount, setPlayerCardCount] = useState<
    Record<string, number>
  >({});
  const [winner, setWinner] = useState<string>();

  const setSetting = (
    key: keyof SettingsInterface,
    value: SettingsInterface[keyof SettingsInterface]
  ) => {
    setSettings((settings: SettingsInterface) => ({
      ...settings,
      [key]: value,
    }));
  };

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

  const initializeGame = useCallback(() => {
    setWinner("");
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

  useEffect(() => {
    initializeGame();
  }, [initializeGame, searchParams, settings.startsAt]);

  return (
    <div className="flex flex-col flex-grow">
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
                  {player}: {cardValueMap[playerCardCount[player]]}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                className="button"
                onClick={() => setSetting("clockwise", !settings.clockwise)}
              >
                Play direction:{" "}
                {settings.clockwise ? "Clockwise" : "Counter-clockwise"}
              </button>
            </div>
          </div>
        )}
        <button onClick={initializeGame} className="mt-6 button button--bland">
          Restart
        </button>
      </div>
      <RuleModal rules={settings.rules} />
    </div>
  );
}
