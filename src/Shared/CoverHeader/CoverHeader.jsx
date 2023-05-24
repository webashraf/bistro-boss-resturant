import React from 'react';

const CoverHeader = ({heading, description, bgI}) => {
    return (
        <div style={{backgroundImage: `url(${coverImg})`}} className={` p-36 bg-cover bg-center bg-no-repeat `}>
        <div className={`p-20 bg-[#ffffffac] text-center`}>
          {/* <img src={coverImg} alt="" /> */}
          <h1 className="text-5xl mb-2">Bistro Boss</h1>
          <p className="px-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
        </div>
      </div>
    );
};

export default CoverHeader;