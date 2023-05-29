import React from 'react';

const MenuCard = ({ menu }) => {
    const handleAddToCart = (id) =>{
        console.log("add to cart", id);
    }
    return (
        <div>
            {menu.length}
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className='relative'><img src={menu.image} alt="Shoes" />
                <p className='bg-black text-white rounded-lg px-2 py-1 absolute right-3 top-3'>${menu.price}</p>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{menu.name}</h2>
                    <p>{menu.recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(menu._id)} className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;