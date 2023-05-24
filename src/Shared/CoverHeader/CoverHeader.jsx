import { Parallax } from "react-parallax";
const CoverHeader = ({ heading, description, img }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className={` p-36 bg-cover bg-center bg-no-repeat h-[200px]`}
      >
        <div className={`p-20 bg-[#0000008e] text-center text-white uppercase`}>
          <h1 className="text-5xl mb-2">{heading}</h1>
          <p className="px-20">{description}</p>
        </div>
      </div>{" "}
      <div style={{ height: "200px" }} />
    </Parallax>
  );
};

export default CoverHeader;
