import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useCart from '../../hooks/useCart';





const MenuCard = ({ menu, loading }) => {
    const { user } = useContext(AuthContext);
    const { name, price, image, category, recipe, _id } = menu;
    // console.log(user);
    const [, refetch] = useCart();


    const handleAddToCart = (items) => {


        const orderItems = { itemId: _id, name, price, image, category, email: user?.email };
        console.log(user);
        if (user) {
            console.log("add to cart", orderItems);
            fetch(`http://localhost:5000/carts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderItems)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        console.log(data);
                        refetch(); //TranStack function for refactching data //

                    }
                })
        }

    }



    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className='relative'><img src={image} alt="Shoes" />
                    <p className='bg-black text-white rounded-lg px-2 py-1 absolute right-3 top-3'>${price}</p>
                </figure>
                <div className="card-b`ody">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(menu)} className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;