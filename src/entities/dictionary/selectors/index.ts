import { RootState } from "@/app/store";

import { DictionarySliceType } from "../types";

export const getDictionary = (state: RootState): DictionarySliceType =>
  state.dictionary;
