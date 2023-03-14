import { Dispatch, useEffect, useState } from "react";

import { ColorSchemeEnum } from "../../types";
import { applyScheme, getSavedScheme, getSystemScheme } from "../../utils";

export const useColorScheme = (): {
  colorScheme: ColorSchemeEnum;
  setColorScheme: Dispatch<ColorSchemeEnum>;
} => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeEnum>(
    getSavedScheme() || getSystemScheme()
  );

  useEffect(() => {
    applyScheme(colorScheme, true);
  }, [colorScheme]);

  return { colorScheme, setColorScheme };
};
