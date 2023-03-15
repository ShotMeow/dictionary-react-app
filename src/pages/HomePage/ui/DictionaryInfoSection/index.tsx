import React, { FC, useState } from "react";
import { useSelector } from "react-redux";

import { LinkIcon, PauseIcon, TriangleIcon } from "@/shared/ui";
import { DictionaryType, getDictionary } from "@/entities/dictionary";

import { getPhonetic } from "../../utils/getPhonetic";

export const DictionaryInfoSection: FC = () => {
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);

  const { dictionary } = useSelector(getDictionary);

  const handleAudioClick = (dictionary: DictionaryType) => {
    setAudioPlaying(true);
    const audio = new Audio(getPhonetic(dictionary)?.audio);
    audio.play();

    const interval = setInterval(() => {
      if (audio.ended) {
        setAudioPlaying(false);
        clearInterval(interval);
      }
    }, 100);
  };

  return dictionary ? (
    <section className="my-20">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-6xl">{dictionary.word}</h1>
          <p className="text-xl md:text-2xl h-8 text-purple-500 mt-6">
            {getPhonetic(dictionary)?.text}
          </p>
        </div>
        <button
          disabled={!getPhonetic(dictionary)?.audio}
          onClick={() => handleAudioClick(dictionary)}
          className="w-20 h-20 rounded-full flex items-center justify-center bg-purple-300 disabled:bg-gray-200 text-purple-500 disabled:text-gray-500"
        >
          {audioPlaying ? <PauseIcon /> : <TriangleIcon />}
        </button>
      </div>
      <div className="space-y-8 mt-10">
        {dictionary.meanings.map((meaning) => (
          <div className="space-y-8" key={meaning.partOfSpeech}>
            <div className="flex items-center gap-10">
              <h2 className="text-2xl font-bold">{meaning.partOfSpeech}</h2>
              <div className="h-0.5 w-full bg-black/10 dark:bg-white/10" />
            </div>
            {Boolean(meaning.definitions.length) && (
              <div>
                <h3 className="text-xl text-neutral-600 dark:text-neutral-400">
                  Definitions
                </h3>
                <ul className="list-disc pl-10 marker:text-purple-500 space-y-2 text-lg mt-4">
                  {meaning.definitions.map((definition) => (
                    <li key={definition.definition}>{definition.definition}</li>
                  ))}
                </ul>
              </div>
            )}
            {Boolean(meaning.synonyms.length) && (
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
                <h3 className="text-xl text-neutral-600 dark:text-neutral-400">
                  Synonyms
                </h3>
                <ul className="flex gap-4 flex-wrap text-xl font-bold text-purple-500">
                  {meaning.synonyms.map((synonym) => (
                    <li key={synonym}>{synonym}</li>
                  ))}
                </ul>
              </div>
            )}
            {Boolean(meaning.antonyms.length) && (
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
                <h3 className="text-xl text-neutral-600 dark:text-neutral-400">
                  Antonyms
                </h3>
                <ul className="flex gap-4 flex-wrap text-xl font-bold text-purple-500">
                  {meaning.antonyms.map((synonym) => (
                    <li key={synonym}>{synonym}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      <footer className="border-t-2 mt-10">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-4 text-neutral-600 dark:text-neutral-400">
          <h4>Source</h4>
          <a
            className="underline flex items-center gap-2"
            href={dictionary.sourceUrls[0]}
            target="_blank"
          >
            {dictionary.sourceUrls[0]} <LinkIcon />
          </a>
        </div>
      </footer>
    </section>
  ) : (
    <section className="my-20">
      <h1 className="text-6xl text-center">Слово не найдено</h1>
    </section>
  );
};
