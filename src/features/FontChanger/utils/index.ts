import { FontsEnum } from "../types";

const LS_LOCALE_KEY = "dictionary:font";

export const applyFont = (fontFamily: FontsEnum): void => {
  localStorage.setItem(LS_LOCALE_KEY, fontFamily);
};

export const getFont = (): FontsEnum => {
  const lsFont = localStorage.getItem(LS_LOCALE_KEY) as FontsEnum | null;

  if (lsFont) return lsFont;

  return FontsEnum.SANS;
};
