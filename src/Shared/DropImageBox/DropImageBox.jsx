import React from 'react';

const DropImageBox = ({menu}) => {
    return (
        <div className='flex gap-1'>
            <div className='w-[150px] h-[150px]'>
                <img style={{borderRadius: "0 200px 200px 200px"}} className='w-full object-cover' src={menu.image} alt="" />
            </div>
            <div>
                <h2>{menu.name}-------------------------------</h2>
                <p>{menu.recipe}</p>
            </div>
            <div>
                <h4 className='text-yellow-600'>${menu.price}</h4>
            </div>
        </div>
    );
};

export default DropImageBox;