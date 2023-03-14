import React, { FC } from "react";
import { Dropdown } from "@/shared/ui/Dropdown";
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
      className="bg-gray-200 rounded-lg"
    >
      <ul className="text-xl">
        <li>
          <button
            onClick={() => setFontCategory(FontsEnum.SANS)}
            className={classNames(
              {
                "bg-purple-400 text-white": fontCategory === FontsEnum.SANS,
              },
              "capitalize hover:bg-purple-400 hover:text-white w-full pl-4 pr-20 py-2 text-left rounded-t-lg"
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
                "bg-purple-400 text-white": fontCategory === FontsEnum.SERIF,
              },
              "capitalize hover:bg-purple-400 hover:text-white w-full pl-4 pr-20 py-2 text-left"
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
                "bg-purple-400 text-white": fontCategory === FontsEnum.MONO,
              },
              "capitalize hover:bg-purple-400 hover:text-white w-full pl-4 pr-20 py-2 text-left rounded-b-lg"
            )}
          >
            {FontsEnum.MONO}
          </button>
        </li>
      </ul>
    </Dropdown>
  );
};
