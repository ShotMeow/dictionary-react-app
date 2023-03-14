import React, { FC } from "react";
import { useColorScheme } from "@/features/ColorScheme/hooks/useColorScheme";
import { Checkbox } from "@/shared/ui";
import { ColorSchemeEnum } from "@/features/ColorScheme/types";
import { MoonIcon } from "@/shared/ui";

export const ColorSchemeChanger: FC = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <div className="flex items-center gap-2 md:gap-6 dark:text-purple-500">
      <Checkbox
        onClick={() =>
          setColorScheme(
            colorScheme === ColorSchemeEnum.LIGHT
              ? ColorSchemeEnum.DARK
              : ColorSchemeEnum.LIGHT
          )
        }
        checked={colorScheme === ColorSchemeEnum.DARK}
      />
      <MoonIcon />
    </div>
  );
};
