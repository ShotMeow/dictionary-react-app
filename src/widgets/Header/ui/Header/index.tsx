import React, { FC } from "react";
import { Logo } from "@/shared/ui";
import { FontChanger } from "@/features/FontChanger";
import { ColorSchemeChanger } from "@/features/ColorScheme";

export const Header: FC = () => {
  return (
    <header className="flex items-center justify-between my-4">
      <Logo />
      <div className="flex items-center gap-4 md:gap-10">
        <FontChanger />
        <div className="h-8 border-r-2 border-black/20 dark:border-white/20" />
        <ColorSchemeChanger />
      </div>
    </header>
  );
};
