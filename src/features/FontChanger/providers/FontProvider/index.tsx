import React, { FC, PropsWithChildren } from "react";

import { useFont } from "../../hooks/useFont";
import { FontContext } from "../../contexts";

export const FontProvider: FC<PropsWithChildren> = ({ children }) => {
  const { fontCategory, setFontCategory } = useFont();

  return (
    <FontContext.Provider value={{ fontCategory, setFontCategory }}>
      {children}
    </FontContext.Provider>
  );
};
