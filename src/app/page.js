"use client";

import Translator from "@/components/Translator";
import heroImg from "../assets/hero_img.jpg";
import logo from "../assets/logo.svg";
import TranslationResult from "@/components/TranslationResult";
import useTranslation from "@/hooks/useTranslation";


const optionsLanguage = [
  { id: 1, lang: "Detect Language" },
  { id: 2, lang: "English", value: "en" },
  { id: 3, lang: "French", value: "fr" },
  { id: 4, lang: "Spanish", value: "es" },
  { id: 5, lang: "German", value: "de" },
  { id: 6, lang: "Italian", value: "it" },
];

const Home = () => {
  const { state, dispatch, translate, ACTIONS } = useTranslation();

  const handleInputChange = (value) => {
    dispatch({ type: ACTIONS.SET_USER_INPUT, payload: value });
  };

  const handleTabChange = (tabId) => {
    let tabSelected = optionsLanguage.find(item => item.id === tabId);
    dispatch({ type: ACTIONS.SET_LANG, payload: tabSelected  });
  };

  const handleTranslateChange = (tabId) => {
    let tabSelected = optionsLanguage.find(item => item.id === tabId);
    dispatch({ type: ACTIONS.SET_TRANSLATION_LANG, payload: tabSelected });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const speak = (text, lang) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    synth.speak(utterance);
  };

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
          input={ state.userInput }
          setInput={ handleInputChange }
          langs={ optionsLanguage } 
          activeLang={ state.selectedLang } 
          setActiveLang={ handleTabChange }
          handleClick={ translate }
          handleCopy={ () => copyToClipboard(state.userInput) }
          handleSpeak={ () => speak(state.userInput, state.selectedLang.value) }
        />
        <TranslationResult 
          translation={ state.translation }
          langs={ optionsLanguage.filter(lang => lang.id != 1) }
          activeLang={ state.translationLang }
          setActiveLang={ handleTranslateChange }
          handleCopy={ () => copyToClipboard(state.translation) }
          handleChange={ () => dispatch({ type: ACTIONS.INVERT_STATES }) }
          handleSpeak={ () => speak(state.translation, state.translationLang.value) }
        />
      </div>
    </main>
  );
};

export default Home;
