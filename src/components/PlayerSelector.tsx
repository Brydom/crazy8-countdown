import { useState } from "react";

interface PlayerSelectorProps {
  players: string[];
  setPlayers: (players: string[]) => void;
}

export default function PlayerSelector({
  players,
  setPlayers,
}: PlayerSelectorProps) {
  const [inputValue, setInputValue] = useState("");

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (["Enter", "Tab", ",", " "].includes(e.key)) {
      const sanitizedInput = inputValue.trim().replace(/,/g, "");
      const formattedInput =
        sanitizedInput.charAt(0).toUpperCase() + sanitizedInput.slice(1);

      if (!formattedInput) return;

      if (!players.includes(formattedInput)) {
        setPlayers([...players, formattedInput]);
      }

      setInputValue("");
    }
  };

  const onRemovePlayer = (player: string) => {
    setPlayers(players.filter((p) => p !== player));
  };

  return (
    <div>
      <input
        type="text"
        className="mb-4"
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
        onKeyUp={onKeyDown}
        placeholder="Enter a name"
        autoCapitalize="words"
      />
      <div className="stack">
        {players.map((player) => (
          <button
            className="button button--secondary"
            key={player}
            onClick={() => onRemovePlayer(player)}
          >
            {player}
          </button>
        ))}
      </div>
    </div>
  );
}
