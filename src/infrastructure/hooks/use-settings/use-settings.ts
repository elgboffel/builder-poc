import { useRecoilValue } from "recoil";
import { settingsAtom } from "@infrastructure/hooks/use-settings/atoms";

const useSettings = () => {
  const settings = useRecoilValue(settingsAtom);
  return {
    ...settings,
  };
};

export { useSettings };
