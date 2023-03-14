import { ColorSchemeEnum } from "@/features/ColorScheme/types";

const LS_COLOR_SCHEME_KEY = "dictionary:scheme";

export function applyScheme(scheme: ColorSchemeEnum, persist = false): void {
  if (scheme === ColorSchemeEnum.DARK) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  persist && localStorage.setItem(LS_COLOR_SCHEME_KEY, scheme);
}

export function getSystemScheme(): ColorSchemeEnum {
  return window.matchMedia("(prefers-color-scheme:dark)").matches
    ? ColorSchemeEnum.DARK
    : ColorSchemeEnum.LIGHT;
}

export function getSavedScheme(): ColorSchemeEnum {
  return localStorage.getItem(LS_COLOR_SCHEME_KEY) as ColorSchemeEnum;
}

export function removeSavedScheme(): void {
  localStorage.removeItem(LS_COLOR_SCHEME_KEY);
}
