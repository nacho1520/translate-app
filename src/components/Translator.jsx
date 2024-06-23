import Tabs from "./Tabs";
import PrimaryBtn from "./PrimaryBtn";
import AuxiliaryBtn from "./AuxiliaryBtn";
import Dropdown from "./Dropdown";

import soundImg from "../assets/sound_max_fill.svg";
import copyImg from "../assets/Copy.svg";
import alfaImg from "../assets/Sort_alfa.svg";

const Translator = ({ input, setInput, langs, activeLang, setActiveLang, handleClick, handleCopy, handleSpeak }) => {
    return(
        <div className="p-6 border border-stroke-gray bg-card-gray/80 rounded-3xl">
            <div className="inline-flex flex-wrap gap-1 w-full border-b border-stroke-gray pb-4 pl-2">
                <Tabs 
                    options={ langs.slice(0,3) } 
                    activeLang={ activeLang }
                    setActiveLang={ setActiveLang } 
                />
                <Dropdown 
                    options={ langs.slice(3) }
                    activeLang={ activeLang }
                    setActiveLang={ setActiveLang }
                />
            </div>
            <textarea 
                value={ input }
                onChange={(e) => setInput(e.target.value)}
                maxLength={ 500 }
                rows={ 8 }
                className="resize-none w-full mt-6 bg-transparent outline-none text-font-white"
            />
            <div className="flex w-full justify-end mb-3">
                <p className="text-font-gray text-xs font-medium">
                    { input.length }/500
                </p>
            </div>
            <div className="w-full flex justify-between items-center">
                <div className="inline-flex flex-wrap gap-2">
                    <AuxiliaryBtn
                        handleClick={ handleSpeak }
                    >
                        <img 
                            src={ soundImg.src }
                            style={{ width: "20px", height: "20px" }}
                        />
                    </AuxiliaryBtn>
                    <AuxiliaryBtn
                        handleClick={ handleCopy }
                    >
                        <img 
                            src={ copyImg.src }
                            style={{ width: "20px", height: "20px" }}
                        />
                    </AuxiliaryBtn>
                </div>
                <PrimaryBtn
                    handleClick={ handleClick }
                >
                    <div className="inline-flex flex-wrap gap-2">
                        <img 
                            src={ alfaImg.src }
                            className="w-6 h-6"
                        />
                        <p className="text-font-white font-bold text-base">Translate</p>
                    </div>
                </PrimaryBtn>
            </div>
        </div>
    );
};

export default Translator;