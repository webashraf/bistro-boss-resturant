import { Helmet } from "react-helmet";
import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";

const Mycart = () => {
  const [cart, refetch] = useCart();
  let total = 0;
  if (cart) {
    total = cart.reduce((prev, current) => prev + current.price, 0);
  }


  const handleDeleteItem = (item) => {
    console.log(item);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(item._id);
        // http://localhost:5000/carts/hjjhtjjytuj
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then((data) => {
            refetch();
            console.log(data);
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BISTRO BOSS | Cart</title>
      </Helmet>
      <div className="text-center">
        <h1 className="text-6xl py-10">My Cart Page</h1>
        <div className="flex justify-between px-4 border-4 border-cyan-900 py-6 rounded-md items-center">
          <span className="text-4xl">Total Item : {cart?.length}</span>
          <span className="text-4xl">Total Price : ${total}</span>
          <button className="btn bg-cyan-900">Pay</button>
        </div>
      </div>
      <div className="overflow-y-auto w-full border-4 border-cyan-900 rounded-md">
        <table className="table w-full">
          {/* head */}
          <thead className="">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th className="text-end">Price</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {cart.map((cartItem, i) => (
              <tr key={cartItem._id} className="hover ">
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={cartItem.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{cartItem.name}</div>
                    </div>
                  </div>
                </td>
                <td className="text-end">${cartItem.price}</td>
                <td className="flex justify-end">
                  <button
                    onClick={() => handleDeleteItem(cartItem)}
                    className="btn btn-red-600 btn-lg"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mycart;
