import React, { FC, useEffect, useState } from "react";
import { Field } from "@/shared/ui";
import { fetchDictionary } from "@/entities/dictionary";
import { useDebounce } from "@/shared/hooks";
import { useDispatch } from "react-redux";
import { Dispatch } from "@/app/store";
import { DictionaryInfoSection } from "@/pages/HomePage/ui/DictionaryInfoSection";

export const HomePage: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const debounce = useDebounce<string>(inputValue, 500);

  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch(fetchDictionary(inputValue));
  }, [debounce]);

  return (
    <main className="mt-10">
      <Field inputValue={inputValue} setInputValue={setInputValue} />
      <DictionaryInfoSection />
    </main>
  );
};
