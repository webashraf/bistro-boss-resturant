import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navMenu = (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/ourmenu"}>Our Menu</Link>
      <Link to={"/ourshop/salads"}>Our Shop</Link>
    </>
  );
  console.log(user);
  const signOut = () => {
    console.log("Log Out", user);
    logOut()
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
  };
  return (
    <div className="">
      <div className="navbar bg-[#000000a2] fixed z-10 max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white space-y-2"
            >
              {navMenu}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-white">
            daisyUI
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white space-x-2">
            {navMenu}
          </ul>
        </div>
        <div className="navbar-end">
          {!user ? (
            <Link className="btn btn-primary" to={"/login"}>
              Login
            </Link>
          ) : (
            <button onClick={signOut} className="btn btn-warning text-white">
              Log OUt
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
