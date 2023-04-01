"use client";

import Link from "@/components/Link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { SettingsInterface } from "@/utils/interfaces";

export default function Settings() {
  const [rules, setRules] = useState<SettingsInterface["rules"]>("bc");
  const [startsAt, setStartsAt] = useState<SettingsInterface["startsAt"]>(8);

  const searchParams = useSearchParams();

  return (
    <div>
      <p className="mb-8 text-2xl">Choose your settings</p>
      <div className="flex flex-col items-start gap-4">
        <select
          defaultValue=""
          className="w-1/2 button button--bland"
          onChange={(e) =>
            setRules(e.currentTarget.value as SettingsInterface["rules"])
          }
        >
          <option disabled value="">
            Ruleset
          </option>
          <option value="bc">British Columbia (default)</option>
          <option value="mb">Manitoba</option>
        </select>
        <select
          defaultValue=""
          className="w-1/2 button button--bland"
          onChange={(e) =>
            setStartsAt(+e.currentTarget.value as SettingsInterface["startsAt"])
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
            rules,
            startsAt,
          },
        }}
        className="mt-6 button"
        arrow
      >
        Start playing
      </Link>
    </div>
  );
}
