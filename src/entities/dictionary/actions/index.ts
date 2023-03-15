import { createAsyncThunk } from "@reduxjs/toolkit";

import { clearDictionaries, setDictionaries } from "../slice";
import { DictionaryType } from "@/entities/dictionary/types";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

export const fetchDictionary = createAsyncThunk<void, string>(
  "api/fetchDictionary",
  async (word, thunk) => {
    const response = await fetch(`${API_URL}/${word}`);
    const data: DictionaryType[] = await response.json();
    if (response.ok) {
      thunk.dispatch(setDictionaries(data[0]));
    } else {
      thunk.dispatch(clearDictionaries());
    }
  }
);
