import React, { FC, HTMLAttributes } from "react";
import { FontsEnum } from "@/features/FontChanger/types";
import { ArrowIcon } from "@/shared/ui";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  shown: boolean;
  onShownChange: React.Dispatch<React.SetStateAction<boolean>>;
  fontCategory: FontsEnum;
}

export const FontChangerButton: FC<Props> = ({
  shown,
  onShownChange,
  fontCategory,
  ...props
}) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onShownChange(!shown);
  };
  return (
    <button
      onClick={(event) => handleClick(event)}
      className="capitalize text-xl font-bold flex items-center gap-4"
      {...props}
    >
      {fontCategory}
      <span
        className={classNames(
          {
            "rotate-180": shown,
          },
          "text-purple-400 transition-transform"
        )}
      >
        <ArrowIcon />
      </span>
    </button>
  );
};
