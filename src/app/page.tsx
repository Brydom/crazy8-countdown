"use client";

import PlayerSelector from "@/components/PlayerSelector";
import Link from "@/components/Link";
import { useState } from "react";

export default function Home() {
  const [players, setPlayers] = useState<string[]>([]);

  return (
    <div>
      <p className="mb-8 text-2xl">Who&apos;s playing</p>
      <PlayerSelector players={players} setPlayers={setPlayers} />
      <Link
        href={{
          pathname: "/settings",
          query: { players },
        }}
        disabled={players.length < 2}
        disabledClassName="button--disabled"
        className="mt-6 button"
        arrow
      >
        Choose your settings
      </Link>
    </div>
  );
}
