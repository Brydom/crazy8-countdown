"use client";

import PlayerSelector from "@/components/PlayerSelector";
import clsx from "clsx";
import Link from "next/link";
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
        className={clsx("button mt-6", {
          "opacity-50 pointer-events-none": players.length < 2,
        })}
      >
        Settings &rarr;
      </Link>
    </div>
  );
}
