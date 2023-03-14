import React, { FC, HTMLAttributes } from "react";
import { FontsEnum } from "@/features/FontChanger/types";

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
      className="capitalize text-xl font-bold"
      {...props}
    >
      {fontCategory}
    </button>
  );
};
