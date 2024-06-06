const AuxiliaryBtn = ({ children, handleClick }) => {
    return(
        <button 
            className="w-9 h-9 flex justify-center items-center border border-stroke-gray rounded-xl"
            onClick={ () => handleClick() }    
        >
            {
                children
            }
        </button>
    );
}

export default AuxiliaryBtn;