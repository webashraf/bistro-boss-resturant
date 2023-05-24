
const HeadingTitle = ({subTitle, title, color}) => {
    return (
        <div className="text-center w-1/2 mx-auto pb-10 mb-10">
            <p className="py-3 text-lg text-yellow-500">--- {subTitle} ---</p>
            <h2 className={`text-5xl py-5 border-t-4 border-b-4 uppercase ${!color ? "text-black" : "text-white"}`}>{title}</h2>
        </div>
    );
};

export default HeadingTitle;