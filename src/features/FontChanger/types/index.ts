import { useFont } from "@/features/FontChanger";

export enum FontsEnum {
  SANS = "sans",
  SERIF = "serif",
  MONO = "mono",
}

export type FontContextType = ReturnType<typeof useFont>;
