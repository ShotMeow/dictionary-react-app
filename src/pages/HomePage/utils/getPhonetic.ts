import { DictionaryType } from "@/entities/dictionary/types";

export const getPhonetic = (dictionary: DictionaryType) => {
  return dictionary.phonetics.find(
    (phonetic) => phonetic.text && phonetic.audio
  );
};
