const Tabs = ({ options }) => {
    return(
        <div className="inline-flex flex-wrap gap-3">
            {
                options.map(item => (
                    <button className="rounded-xl px-3 py-2 text-font-gray font-bold text-sm">
                        { item.lang }
                    </button>
                ))
            }
        </div>
    );
};

export default Tabs;