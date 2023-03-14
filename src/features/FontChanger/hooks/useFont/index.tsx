import React, { useEffect, useState } from "react";

import { FontsEnum } from "../../types";
import { applyFont, getFont } from "../../utils";

export const useFont = (): {
  fontCategory: FontsEnum;
  setFontCategory: React.Dispatch<FontsEnum>;
} => {
  const [fontCategory, setFontCategory] = useState<FontsEnum>(getFont());

  useEffect(() => {
    applyFont(fontCategory);
  }, [fontCategory]);

  return { fontCategory, setFontCategory };
};
