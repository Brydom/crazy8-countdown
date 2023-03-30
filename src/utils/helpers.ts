import { SettingsInterface } from "./interfaces";

export function setSetting(
  setSettings: React.Dispatch<React.SetStateAction<SettingsInterface>>,
  key: keyof SettingsInterface,
  value: SettingsInterface[keyof SettingsInterface]
) {
  setSettings((settings: SettingsInterface) => ({
    ...settings,
    [key]: value,
  }));
}
