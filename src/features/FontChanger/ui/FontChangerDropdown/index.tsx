import React, { FC } from "react";
import { Dropdown } from "@/shared/ui";
import { FontsEnum } from "../../types";
import classNames from "classnames";

interface Props {
  fontCategory: FontsEnum;
  onShownChange: React.Dispatch<React.SetStateAction<boolean>>;
  shown: boolean;
  setFontCategory: React.Dispatch<FontsEnum>;
}

export const FontChangerDropdown: FC<Props> = ({
  fontCategory,
  onShownChange,
  setFontCategory,
  shown,
}) => {
  return (
    <Dropdown
      shown={shown}
      onShownChange={onShownChange}
      className="bg-neutral-100 rounded-lg shadow-xl dark:bg-neutral-900"
    >
      <ul className="text-xl">
        <li>
          <button
            onClick={() => setFontCategory(FontsEnum.SANS)}
            className={classNames(
              {
                "bg-purple-500 text-white": fontCategory === FontsEnum.SANS,
              },
              "capitalize hover:bg-purple-500 hover:text-white w-full pl-4 pr-20 py-2 text-left rounded-t-lg font-sans"
            )}
          >
            {FontsEnum.SANS}
          </button>
        </li>
        <li>
          <button
            onClick={() => setFontCategory(FontsEnum.SERIF)}
            className={classNames(
              {
                "bg-purple-500 text-white": fontCategory === FontsEnum.SERIF,
              },
              "capitalize hover:bg-purple-500 hover:text-white w-full pl-4 pr-20 py-2 text-left font-serif"
            )}
          >
            {FontsEnum.SERIF}
          </button>
        </li>
        <li>
          <button
            onClick={() => setFontCategory(FontsEnum.MONO)}
            className={classNames(
              {
                "bg-purple-500 text-white": fontCategory === FontsEnum.MONO,
              },
              "capitalize hover:bg-purple-500 hover:text-white w-full pl-4 pr-20 py-2 text-left rounded-b-lg font-mono"
            )}
          >
            {FontsEnum.MONO}
          </button>
        </li>
      </ul>
    </Dropdown>
  );
};
