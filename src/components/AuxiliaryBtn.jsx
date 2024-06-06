const AuxiliaryBtn = ({ children }) => {
    return(
        <button className="w-9 h-9 flex justify-center items-center border border-stroke-gray rounded-xl">
            {
                children
            }
        </button>
    );
}

export default AuxiliaryBtn;