"use client";

import expandIcon from "../assets/Expand_down.svg";
import { useState } from "react";

const Dropdown = ({ options, activeLang, setActiveLang }) => {
    const [ open, setOpen ] = useState(false);
    
    return(
        <div className="relative">
            <div 
                className={`rounded-xl inline-flex flex-wrap items-center gap-1 px-3 py-2 cursor-pointer ${ open ? 'border-stroke-gray border-t border-l border-r rounded-t-xl' : '' } ${ options.find(option => option.id == activeLang.id)  ? 'bg-active-tab' : '' }`}
                onClick={ () => setOpen(prev => !prev) }
            >
                <p className={`min-w-14 text-sm font-bold ${ options.find(option => option.id == activeLang.id)  ? 'text-font-white' : 'text-font-gray' } `}>{ options.find(option => option.id == activeLang.id)  ? activeLang.lang : options[0].lang }</p>
                <img 
                    src={ expandIcon.src }
                    width={ 24 }
                    height={ 24 }
                />
            </div>
            <div 
                className={ open ? 
                        'absolute left-0 top-[75%] z-10  w-full bg-card-dark rounded-b-xl border-b border-l border-r border-stroke-gray' : 
                        'hidden' 
                    }
            >
                {
                    options.map(option => (
                        <p 
                            key={ option.id }
                            className={`text-font-gray text-sm font-medium px-6 py-2 cursor-pointer ${ activeLang.id == option.id ? `bg-slate-600` : '' }`}
                            onClick={ () => {
                                setActiveLang(option.id);
                                setOpen(false);
                                } 
                            }
                        >
                            { option.lang }
                        </p>
                    ))
                }
            </div>
        </div>
        
    );
};

export default Dropdown;