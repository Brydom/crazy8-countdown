"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { SettingsInterface } from "@/utils/interfaces";
import { setSetting } from "@/utils/helpers";

export default function Settings() {
  const [settings, setSettings] = useState<SettingsInterface>({
    rules: "bc",
    startsAt: 13,
  });

  const searchParams = useSearchParams();

  return (
    <div>
      <p className="mb-8 text-2xl">Choose your settings</p>
      <div className="flex flex-col gap-4 items-start">
        <select
          defaultValue=""
          className="button button--bland w-1/2"
          onSelect={(e) =>
            setSetting(
              setSettings,
              "rules",
              e.currentTarget.value as SettingsInterface["rules"]
            )
          }
        >
          <option disabled value="">
            Ruleset
          </option>
          <option value="official">Official (default)</option>
          <option value="bc">British Columbia</option>
          <option value="mb">Manitoba</option>
        </select>
        <select
          defaultValue=""
          className="button button--bland w-1/2"
          onSelect={(e) =>
            setSetting(
              setSettings,
              "startsAt",
              +e.currentTarget.value as SettingsInterface["startsAt"]
            )
          }
        >
          <option disabled value="">
            Starting wildcard
          </option>
          <option value="13">K</option>
          <option value="12">Q</option>
          <option value="11">J</option>
          <option value="10">10</option>
          <option value="9">9</option>
          <option value="8">8 (default)</option>
          <option value="7">7</option>
          <option value="6">6</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">A</option>
        </select>
      </div>
      <Link
        href={{
          pathname: "/play",
          query: {
            players: searchParams.getAll("players"),
            ...settings,
          },
        }}
        className="button mt-6"
      >
        Play &rarr;
      </Link>
    </div>
  );
}
