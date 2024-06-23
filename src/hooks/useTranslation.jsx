import { useEffect, useReducer } from "react";
import optionsLanguage from "@/common/languageOptions";


// Reducer Actions
const ACTIONS = {
    SET_USER_INPUT: "SET_USER_INPUT",
    SET_TRANSLATION: "SET_TRANSLATION",
    SET_LANG: "SET_LANG",
    SET_TRANSLATION_LANG: "SET_TRANSLATION_LANG",
    INVERT_STATES: "INVERT_STATES",
};

// Reducer
const reducer = ( state, action ) => {
    switch(action.type) {
        case ACTIONS.SET_USER_INPUT: 
            return { ...state, userInput: action.payload };
        case ACTIONS.SET_TRANSLATION: 
            return { ...state, translation: action.payload };
        case ACTIONS.SET_LANG:
            return { ...state, selectedLang: action.payload };
        case ACTIONS.SET_TRANSLATION_LANG:
            return { ...state, translationLang: action.payload };
        case ACTIONS.INVERT_STATES:
            return {
                ...state,
                userInput: state.translation,
                translation: state.userInput,
                selectedLang: state.translationLang,
                translationLang: state.selectedLang,
            } 
    }
};


const useTranslation = () => {
    const [ state, dispatch ] = useReducer(reducer, {
        userInput: "Hello, how are you?",
        translation: "",
        selectedLang: optionsLanguage[1],
        translationLang: optionsLanguage[2],
    });

    const translate = () => {
        fetch(`https://api.mymemory.translated.net/get?q=${ state.userInput }!&langpair=${ state.selectedLang.value }|${ state.translationLang.value }`)
          .then(response => response.json())
          .then(data => {
            dispatch({ type: ACTIONS.SET_TRANSLATION, payload: data.responseData.translatedText  });
          })
          .catch(error => {
            console.log(error)
          })
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
    }, [state.userInput]);

    return { state, dispatch, translate, ACTIONS };
};

export default useTranslation;
