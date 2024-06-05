const Tabs = ({ options, activeLang, setActiveLang }) => {
    
    console.log(activeLang);
    
    return(
        <div className="inline-flex flex-wrap gap-3">
            {
                options.map(item => (
                    <button 
                        className={`rounded-xl px-3 py-2 font-bold text-sm ${ item.id == activeLang.id ? 'text-font-white bg-active-tab' : 'text-font-gray'}`}
                        onClick={ () => setActiveLang(item.id) }    
                    >
                        { item.lang }
                    </button>
                ))
            }
        </div>
    );
};

export default Tabs;