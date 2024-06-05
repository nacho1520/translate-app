const PrimaryBtn = ({ children }) => {
    return(
        <button className="bg-primary-blue rounded-xl px-6 py-3 border border-secondary-blue">
            {
                children
            }
        </button>
    );
};

export default PrimaryBtn;