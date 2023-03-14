import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  checked: boolean;
}

export const Checkbox: FC<Props> = ({ checked, ...props }) => {
  return (
    <button {...props}>
      <input className="hidden" type="checkbox" checked={checked} />
      <div className="relative w-16 h-8 bg-gray-700 dark:bg-purple-500 rounded-full flex items-center cursor-pointer">
        <div
          className={classNames(
            {
              "left-9": checked,
            },
            "w-6 h-6 bg-white rounded-full absolute left-1 transition-all"
          )}
        />
      </div>
    </button>
  );
};
