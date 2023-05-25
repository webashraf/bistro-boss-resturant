import React from 'react';

const DropImageBox = ({menu}) => {
    return (
        <div className='grid grid-cols-3 ml-0 py-3'>
            <div className='w-[200px]'>
                <img style={{borderRadius: "0 200px 200px 200px"}} className='w-[150px] h-[100px] object-cover mr-auto' src={menu.image} alt="" />
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