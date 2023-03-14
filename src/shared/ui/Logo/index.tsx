import React, { FC } from "react";
import { BookIcon } from "../Icons/BookIcon";

export const Logo: FC = () => {
  return (
    <a href="/" className="text-gray-600">
      <BookIcon />
    </a>
  );
};
