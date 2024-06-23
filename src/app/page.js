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
  },
  {
    id: 4,
    lang: "Spanish",
    value: "es",
  },
  {
    id: 5,
    lang: "German",
    value: "de",
  },
  {
    id: 6,
    lang: "Italian",
    value: "it",
  },
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

  const invertLangs = () => {
    let inputAux = userInput;
    let auxLang = selectedLang;
    setUserInput(userTranslated);
    setUserTranslated(inputAux);
    setSelectedLang(translateLang);
    setTranslateLang(auxLang);
  };

  const speak = (text, lang) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    synth.speak(utterance);
  };

  const handleInputSpeak = () => {
    speak(userInput, selectedLang.value);
  };

  const handleResultSpeak = () => {
    speak(userTranslated, translateLang.value);
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

  const manageTranslate = () => {
    translate();
  };

  useEffect(() => {
    translate();
  }, []);

  useEffect(() => {
    const getData = setTimeout(() => {
      console.log("Test");
      translate();
    }, 2000);

    return () => clearTimeout(getData);
  }, [userInput]);

  

  return (
    <main className="relative flex flex-col items-center pt-[92px]">
      <div className="absolute left-0 top-0 w-full h-[500px] bg-gradient-to-b from-body-black/10 to-body-black -z-10">

      </div>
      <img 
        src={ heroImg.src }
        className="absolute left-0 top-0 w-full h-[500px] -z-20 object-cover"
      />
      <img
        src={ logo.src }
        width={ 137 }
        height={ 45 }
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] 2xl:w-[60%] mt-[52px] gap-4 content-stretch pb-5">
        <Translator 
          input={ userInput }
          setInput={ handleInputChange }
          langs={ optionsLanguage } 
          activeLang={ selectedLang } 
          setActiveLang={ handleTabChange }
          handleClick={ manageTranslate }
          handleCopy={ handleInputCopy }
          handleSpeak={ handleInputSpeak }
        />
        <TranslationResult 
          translation={ userTranslated }
          langs={ optionsLanguage.filter(lang => lang.id != 1) }
          activeLang={ translateLang }
          setActiveLang={ handleTranslateChange }
          handleCopy={ handleResultCopy }
          handleChange={ invertLangs }
          handleSpeak={ handleResultSpeak }
        />
      </div>
    </main>
  );
};

export default Home;
