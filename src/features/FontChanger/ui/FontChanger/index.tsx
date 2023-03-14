import React, { FC, useContext, useState } from "react";

import { FontChangerDropdown } from "../FontChangerDropdown";
import { FontChangerButton } from "../FontChangerButton";
import { FontContext } from "../../contexts";
import { FontContextType } from "../../types";

export const FontChanger: FC = () => {
  const [shown, onShownChange] = useState<boolean>(false);

  const { fontCategory, setFontCategory } = useContext(
    FontContext
  ) as FontContextType;

  return (
    <div className="relative">
      <FontChangerButton
        shown={shown}
        onShownChange={onShownChange}
        fontCategory={fontCategory}
      />
      <FontChangerDropdown
        onShownChange={onShownChange}
        shown={shown}
        fontCategory={fontCategory}
        setFontCategory={setFontCategory}
      />
    </div>
  );
};
