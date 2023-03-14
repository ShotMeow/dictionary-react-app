import React, { FC, useState } from "react";
import { getDictionary } from "@/entities/dictionary/selectors";
import { useSelector } from "react-redux";
import { PauseIcon, TriangleIcon } from "@/shared/ui";

export const DictionaryInfoSection: FC = () => {
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);

  const { dictionary } = useSelector(getDictionary);

  const handleAudioClick = () => {
    if (
      dictionary &&
      dictionary[0].phonetics[dictionary[0].phonetics.length - 1].audio
    ) {
      setAudioPlaying(true);
      const audio = new Audio(
        dictionary[0].phonetics[dictionary[0].phonetics.length - 1].audio
      );
      audio.play();

      const interval = setInterval(() => {
        if (audio.ended) {
          setAudioPlaying(false);
          clearInterval(interval);
        }
      }, 100);
    }
  };

  return dictionary ? (
    <section className="my-20">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-6xl">{dictionary[0].word}</h1>
          {dictionary[0].phonetic && (
            <p className="text-xl md:text-2xl text-purple-500 mt-6">
              {dictionary[0].phonetic}
            </p>
          )}
        </div>
        {Boolean(dictionary[0].phonetics.length) && (
          <button
            disabled={Boolean(
              !dictionary[0].phonetics[dictionary[0].phonetics.length - 1].audio
            )}
            onClick={() => handleAudioClick()}
            className="w-20 h-20 rounded-full flex items-center justify-center bg-purple-300 disabled:bg-gray-200 text-purple-500 disabled:text-gray-500"
          >
            {audioPlaying ? <PauseIcon /> : <TriangleIcon />}
          </button>
        )}
      </div>
    </section>
  ) : (
    <section className="my-20">
      <h1 className="text-6xl text-center">Слово не найдено</h1>
    </section>
  );
};
