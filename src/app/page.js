"use client";

import Translator from "@/components/Translator";
import heroImg from "../assets/hero_img.jpg";
import logo from "../assets/logo.svg";
import { useState, useEffect } from "react";
import TranslationResult from "@/components/TranslationResult";


const optionsLanguage = [
  {
    id: 1,
    lang: "Detect Language",
  },
  {
    id: 2,
    lang: "English",
    value: "en",
  },
  {
    id: 3,
    lang: "French",
    value: "fr",
  }
];

const Home = () => {
  const [ userInput, setUserInput ] = useState("Hello, how are you?");
  const [ userTranslated, setUserTranslated ] = useState();
  const [ selectedLang, setSelectedLang ] = useState(optionsLanguage[1]);
  const [ translateLang, setTranslateLang ] = useState(optionsLanguage[2]);

  const handleInputChange = (value) => {
    setUserInput(value);
  };

  const handleTabChange = (tabId) => {
    let tabSelected = optionsLanguage.find(item => item.id === tabId);
    setSelectedLang(tabSelected);
  };

  const handleTranslateChange = (tabId) => {
    let tabSelected = optionsLanguage.find(item => item.id === tabId);
    setTranslateLang(tabSelected);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleInputCopy = () => {
    copyToClipboard(userInput);
  };

  const handleResultCopy = () => {
    copyToClipboard(userTranslated);
  };

  const translate = () => {
    fetch(`https://api.mymemory.translated.net/get?q=${ userInput }!&langpair=${ selectedLang.value }|${ translateLang.value }`)
      .then(response => response.json())
      .then(data => {
        setUserTranslated(data.responseData.translatedText);
      })
      .catch(error => {
        console.log(error)
      })
  };

  useEffect(() => {
    translate();
  }, []);

  const manageTranslate = () => {
    translate();
  };

  return (
    <main className="relative flex flex-col items-center pt-[92px]">
      <img 
        src={ heroImg.src }
        className="absolute left-0 top-[-60%] w-full h-[100vh] -z-10"
      />
      <img
        src={ logo.src }
        width={ 137 }
        height={ 45 }
      />

      <div className="grid grid-cols-2 mt-[52px] gap-4">
        <Translator 
          input={ userInput }
          setInput={ handleInputChange }
          langs={ optionsLanguage } 
          activeLang={ selectedLang } 
          setActiveLang={ handleTabChange }
          handleClick={ manageTranslate }
          handleCopy={ handleInputCopy }
        />
        <TranslationResult 
          translation={ userTranslated }
          langs={ optionsLanguage.filter(lang => lang.id != 1) }
          activeLang={ translateLang }
          setActiveLang={ handleTranslateChange }
          handleCopy={ handleResultCopy }
        />
      </div>
    </main>
  );
};

export default Home;
