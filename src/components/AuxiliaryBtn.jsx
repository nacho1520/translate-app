const AuxiliaryBtn = ({ children }) => {
    return(
        <button className="px-2 border border-stroke-gray rounded-xl">
            {
                children
            }
        </button>
    );
}

export default AuxiliaryBtn;