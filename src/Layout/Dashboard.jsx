import { Helmet } from "react-helmet";
import { RiCalendar2Fill, RiCalendarCheckLine, RiHome2Fill, RiHome2Line, RiMailFill, RiMenu2Fill, RiShoppingBag2Fill, RiShoppingCartFill, RiStarFill, RiUser2Fill, RiWallet2Fill } from 'react-icons/ri';
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

  const isUser = true;




  return (
    <div className="drawer drawer-mobile w-full">
      <Helmet>
        <meta charSet="utf-8" />
        <title>BISTRO BOSS | Dashboard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content px-10">
        {/* <!-- Page content here --> */}
        {/* <h1 className="text-7xl">Cart</h1> */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-cyan-500 text-base-content text-white space-y-3">
          {/* <!-- Sidebar content here --> */}
          <div className="border-b-2 text-center">
            <h2 className="text-5xl">Bistro Boss</h2>
            <p className="tracking-[1rem]">resturant</p>
          </div>
          {
            isUser ?
              <>
                <NavLink to={"/dashboard/home"} className="flex items-center gap-2 text-lg font-bold"><RiHome2Line></RiHome2Line>Admin Home</NavLink>

                <NavLink to={"/dashboard/reservation"} className="flex items-center gap-2 text-lg font-bold"><RiCalendar2Fill></RiCalendar2Fill>Reservation</NavLink>

                <NavLink to={"/dashboard/paymenthistory"} className="flex items-center gap-2 text-lg font-bold"><RiWallet2Fill></RiWallet2Fill> Payment History</NavLink>

                <NavLink to={"/dashboard/mycart"} className="flex items-center gap-2 text-lg font-bold"><RiShoppingCartFill></RiShoppingCartFill> My Cart</NavLink>
                <NavLink to={"/dashboard/addreview"} className="flex items-center gap-2 text-lg font-bold"><RiStarFill></RiStarFill> Add Review</NavLink>
                <NavLink to={"/dashboard/allUsers"} className="flex items-center gap-2 text-lg font-bold"><RiUser2Fill></RiUser2Fill>All User</NavLink>
              </> :
              <>
                <NavLink to={"/dashboard/home"} className="flex items-center gap-2 text-lg font-bold"><RiHome2Line></RiHome2Line>User Home</NavLink>

                <NavLink to={"/dashboard/reservation"} className="flex items-center gap-2 text-lg font-bold"><RiCalendar2Fill></RiCalendar2Fill>Reservation</NavLink>

                <NavLink to={"/dashboard/paymenthistory"} className="flex items-center gap-2 text-lg font-bold"><RiWallet2Fill></RiWallet2Fill> Payment History</NavLink>

                <NavLink to={"/dashboard/mycart"} className="flex items-center gap-2 text-lg font-bold"><RiShoppingCartFill></RiShoppingCartFill> My Cart</NavLink>
                <NavLink to={"/dashboard/addreview"} className="flex items-center gap-2 text-lg font-bold"><RiStarFill></RiStarFill> Add Review</NavLink>
                <NavLink to={"/dashboard/mybooking"} className="flex items-center gap-2 text-lg font-bold"><RiCalendarCheckLine></RiCalendarCheckLine> My Booking</NavLink>
              </>
          }

          <hr />

          <NavLink to={"/home"} className="flex items-center gap-2 text-lg font-bold"><RiHome2Fill></RiHome2Fill>Home</NavLink>

          <NavLink to={"/menu"} className="flex items-center gap-2 text-lg font-bold"><RiMenu2Fill></RiMenu2Fill>menu</NavLink>

          <NavLink to={"/menu"} className="flex items-center gap-2 text-lg font-bold"><RiShoppingCartFill></RiShoppingCartFill>menu</NavLink>

          <NavLink to={"/Shop"} className="flex items-center gap-2 text-lg font-bold"><RiShoppingCartFill></RiShoppingCartFill>Shop</NavLink>

          <NavLink to={"/Shop"} className="flex items-center gap-2 text-lg font-bold"><RiShoppingBag2Fill></RiShoppingBag2Fill>Shop</NavLink>

          <NavLink to={"/Contact"} className="flex items-center gap-2 text-lg font-bold"><RiMailFill></RiMailFill>Contact</NavLink>

        </ul>

      </div>
    </div>
  );
};

export default Dashboard;