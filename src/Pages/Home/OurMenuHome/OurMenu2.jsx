import React from "react";
import coverImg from "../../../assets/Cover/featured.jpg";
import HeadingTitle from "../../../Shared/HeadingTitle/HeadingTitle";

const OurMenu2 = () => {
  return (
    <div
      style={{ backgroundImage: `url(${coverImg})` }}
      className={` bg-cover bg-center bg-no-repeat `}
    >
      <div className="bg-[#00000096] w-full px-36 py-28 ">
        <HeadingTitle
          subTitle={"Check it out"}
          title={"From Our menu"}
          color={true}
        ></HeadingTitle>
        <div className="flex gap-5 items-center">
          <div>
            <img className="w-2/3 ml-auto rounded-sm" src={coverImg} alt="" />
          </div>
          <div className={`text-white`}>
            <h1 className="text-5xl mb-2">Bistro Boss</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
            <button className="btn btn-outline border-b-4 border-b-black border-0 text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu2;
