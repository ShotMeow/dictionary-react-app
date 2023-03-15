import React, { FC, useState } from "react";
import { useSelector } from "react-redux";

import { PauseIcon, TriangleIcon } from "@/shared/ui";
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
    </section>
  ) : (
    <section className="my-20">
      <h1 className="text-6xl text-center">Слово не найдено</h1>
    </section>
  );
};
