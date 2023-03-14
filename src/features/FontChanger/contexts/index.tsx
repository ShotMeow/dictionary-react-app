import { createContext } from "react";
import { FontContextType } from "../types";

export const FontContext = createContext<FontContextType | null>(null);
