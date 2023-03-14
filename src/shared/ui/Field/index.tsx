import React, { FC, HTMLAttributes } from "react";
import { SearchIcon } from "@/shared/ui/Icons/SearchIcon";

interface Props extends HTMLAttributes<HTMLInputElement> {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}
export const Field: FC<Props> = ({ inputValue, setInputValue, ...props }) => {
  return (
    <label className="w-full relative">
      <input
        className="w-full bg-zinc-100 dark:bg-zinc-700 rounded-2xl h-14 pl-4 text-lg font-bold"
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        {...props}
      />
      <span className="absolute right-6 -top-0.5 text-purple-500 cursor-pointer">
        <SearchIcon />
      </span>
    </label>
  );
};
