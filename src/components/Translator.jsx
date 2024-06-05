import Tabs from "./Tabs";
import PrimaryBtn from "./PrimaryBtn";

const Translator = ({ input, setInput, langs, activeLang, setActiveLang }) => {
    return(
        <div className="w-[560px] p-6 border border-stroke-gray bg-card-gray/80 rounded-3xl">
            <div className="border-b border-stroke-gray pb-4 pl-2">
                <Tabs 
                    options={ langs } 
                    activeLang={ activeLang }
                    setActiveLang={ setActiveLang } 
                />
            </div>
            <textarea 
                value={ input }
                onChange={(e) => setInput(e.target.value)}
                maxLength={ 500 }
                rows={ 5 }
                className="resize-none w-full mt-6 bg-transparent outline-none text-font-white"
            />
            <PrimaryBtn>
                <p>Translate</p>
            </PrimaryBtn>
        </div>
    );
};

export default Translator;