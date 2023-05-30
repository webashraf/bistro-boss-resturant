import { Helmet } from "react-helmet";
import { FaTrashAlt } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";




const Mycart = () => {
    const [cart] = useCart()
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>BISTRO BOSS | Cart</title>
            </Helmet>
            <h1>My Cart Page</h1>
            {cart?.length}
            <div className="overflow-y-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            cart.map((cartItem, i) => <tr key={cartItem._id} className="hover ">
                                <td>
                                    {i + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={cartItem.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{cartItem.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-end">
                                    ${cartItem.price}
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Mycart;