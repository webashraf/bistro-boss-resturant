import { Link, Outlet } from "react-router-dom";
import { RiCalendar2Fill, RiCalendarCheckLine, RiHome2Fill, RiHome2Line, RiMailCloseFill, RiMailFill, RiMenu2Fill, RiShoppingBag2Fill, RiShoppingCartFill, RiStarFill, RiWallet2Fill } from 'react-icons/ri';

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        {/* <h1 className="text-7xl">Cart</h1> */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side bg-red-600">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-cyan-500 text-base-content text-white space-y-3">
          {/* <!-- Sidebar content here --> */}
          <div className="border-b-2 text-center">
            <h2 className="text-5xl">Bistro Boss</h2>
            <p className="tracking-[1rem]">resturant</p>
          </div>
          <Link to={"/home"} className="flex items-center gap-2 text-lg font-bold"><RiHome2Line></RiHome2Line>Home</Link>

          <Link to={"/reservation"} className="flex items-center gap-2 text-lg font-bold"><RiCalendar2Fill></RiCalendar2Fill>Reservation</Link>

          <Link to={"/paymenthistory"} className="flex items-center gap-2 text-lg font-bold"><RiWallet2Fill></RiWallet2Fill> Payment History</Link>

          <Link to={"/mycart"} className="flex items-center gap-2 text-lg font-bold"><RiShoppingCartFill></RiShoppingCartFill> My Cart</Link>
          <Link to={"/addreview"} className="flex items-center gap-2 text-lg font-bold"><RiStarFill></RiStarFill> Add Review</Link>
          <Link to={"/mybooking"} className="flex items-center gap-2 text-lg font-bold"><RiCalendarCheckLine></RiCalendarCheckLine> My Booking</Link>

    <hr />

          <Link to={"/home"} className="flex items-center gap-2 text-lg font-bold"><RiHome2Fill></RiHome2Fill>Home</Link>

          <Link to={"/menu"} className="flex items-center gap-2 text-lg font-bold"><RiMenu2Fill></RiMenu2Fill>menu</Link>

          <Link to={"/menu"} className="flex items-center gap-2 text-lg font-bold"><RiShoppingCartFill></RiShoppingCartFill>menu</Link>

          <Link to={"/Shop"} className="flex items-center gap-2 text-lg font-bold"><RiShoppingCartFill></RiShoppingCartFill>Shop</Link>

          <Link to={"/Shop"} className="flex items-center gap-2 text-lg font-bold"><RiShoppingBag2Fill></RiShoppingBag2Fill>Shop</Link>
          
          <Link to={"/Contact"} className="flex items-center gap-2 text-lg font-bold"><RiMailFill></RiMailFill>Contact</Link>
          
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;