import { atom } from "recoil";
import { ContextSettings } from "@infrastructure/types/pages/base";

export const settingsAtom = atom<ContextSettings | undefined>({
  key: "settings",
  default: { cms: undefined },
});
