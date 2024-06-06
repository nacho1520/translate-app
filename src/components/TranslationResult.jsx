import Tabs from "./Tabs";
import AuxiliaryBtn from "./AuxiliaryBtn";

import soundImg from "../assets/sound_max_fill.svg";
import copyImg from "../assets/Copy.svg";

const TranslationResult = ({ translation, langs, activeLang, setActiveLang }) => {
    return(
        <div className="w-[560px] p-6 border border-stroke-gray bg-card-dark/80 rounded-3xl">
            <div className="border-b border-stroke-gray pb-4 pl-2">
                <Tabs 
                    options={ langs } 
                    activeLang={ activeLang }
                    setActiveLang={ setActiveLang } 
                />
            </div>
            <textarea 
                value={ translation }
                maxLength={ 500 }
                rows={ 8 }
                disabled={ true }
                className="resize-none w-full mt-6 bg-transparent outline-none text-font-white"
            />
            <div className="w-full flex justify-between items-center mt-8">
                <div className="inline-flex flex-wrap gap-2">
                    <AuxiliaryBtn>
                        <img 
                            src={ soundImg.src }
                            style={{ width: "20px", height: "20px" }}
                        />
                    </AuxiliaryBtn>
                    <AuxiliaryBtn>
                        <img 
                            src={ copyImg.src }
                            style={{ width: "20px", height: "20px" }}
                        />
                    </AuxiliaryBtn>
                </div>
            </div>
        </div>
    );
};

export default TranslationResult;