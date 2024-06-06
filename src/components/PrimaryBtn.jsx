const PrimaryBtn = ({ children, handleClick }) => {
    return(
        <button 
            className="w-[152px] h-12 flex justify-center items-center bg-primary-blue rounded-xl border border-secondary-blue"
            onClick={ () => handleClick() }
        >
            {
                children
            }
        </button>
    );
};

export default PrimaryBtn;