interface LicenseType {
  name: string;
  url: string;
}

interface PhoneticType {
  audio: string;
  sourceUrl?: string;
  license?: LicenseType;
  text: string;
}

interface DefinitionType {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example: string;
}

interface MeaningType {
  partOfSpeech: string;
  definitions: DefinitionType[];
  synonyms: string[];
  antonyms: string[];
}

export interface DictionaryType {
  word: string;
  phonetic?: string;
  phonetics: PhoneticType[];
  meanings: MeaningType[];
  license: LicenseType;
  sourceUrls: string[];
}

export interface DictionarySliceType {
  dictionary: DictionaryType | null;
}
