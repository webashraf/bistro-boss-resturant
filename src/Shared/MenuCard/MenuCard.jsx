import React from 'react';

const MenuCard = ({ menu }) => {
    return (
        <div>
            {menu.length}
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={menu.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{menu.name}</h2>
                    <p>{menu.recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;