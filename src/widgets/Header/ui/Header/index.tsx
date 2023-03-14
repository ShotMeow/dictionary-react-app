import React, { FC } from "react";
import { Logo } from "@/shared/ui";
import { FontChanger } from "@/features/FontChanger";

export const Header: FC = () => {
  return (
    <header className="flex items-center justify-between my-4">
      <Logo />
      <FontChanger />
    </header>
  );
};
