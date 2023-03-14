import React, { FC, useContext } from "react";
import classNames from "classnames";

import { Header } from "@/widgets/Header";

import {
  FontsEnum,
  FontContext,
  FontContextType,
} from "@/features/FontChanger";

import "./styles/globals.css";

export const App: FC = () => {
  const { fontCategory } = useContext(FontContext) as FontContextType;

  return (
    <div
      className={classNames(
        {
          "font-sans": fontCategory === FontsEnum.SANS,
          "font-serif": fontCategory === FontsEnum.SERIF,
          "font-mono": fontCategory === FontsEnum.MONO,
        },
        "container mx-auto"
      )}
    >
      <Header />
    </div>
  );
};
