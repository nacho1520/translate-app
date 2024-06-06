const PrimaryBtn = ({ children }) => {
    return(
        <button className="w-[152px] h-12 flex justify-center items-center bg-primary-blue rounded-xl border border-secondary-blue">
            {
                children
            }
        </button>
    );
};

export default PrimaryBtn;