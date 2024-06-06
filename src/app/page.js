"use client";

import Translator from "@/components/Translator";
import heroImg from "../assets/hero_img.jpg";
import logo from "../assets/logo.svg";
import { useState } from "react";


const optionsLanguage = [
  {
    id: 1,
    lang: "Detect Language",
  },
  {
    id: 2,
    lang: "English",
  },
  {
    id: 3,
    lang: "French",
  }
];

const Home = () => {
  const [ userInput, setUserInput ] = useState("Hello, how are you?");
  const [ selectedLang, setSelectedLang ] = useState(optionsLanguage[1]);

  const handleInputChange = (value) => {
    setUserInput(value);
  };


  const handleTabChange = (tabId) => {
    let tabSelected = optionsLanguage.find(item => item.id === tabId);
    setSelectedLang(tabSelected);
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
        />
        {/* <Translator langs={ optionsLanguage } /> */}
      </div>
    </main>
  );
};

export default Home;
