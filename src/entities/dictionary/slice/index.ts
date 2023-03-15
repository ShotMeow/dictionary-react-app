import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DictionarySliceType, DictionaryType } from "../types";

const initialState: DictionarySliceType = {
  dictionary: null,
};

export const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    setDictionaries: (state, { payload }: PayloadAction<DictionaryType>) => {
      state.dictionary = payload;
    },
    clearDictionaries: (state) => {
      state.dictionary = null;
    },
  },
});

export const { setDictionaries, clearDictionaries } = dictionarySlice.actions;

export default dictionarySlice.reducer;
