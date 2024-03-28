import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100 fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">
                  <a>Home</a>
                </NavLink>
              </li>
              <li></li>
              <li>
                <NavLink to="/listedbooks">
                  <a>Listed Books</a>
                </NavLink>
              </li>
              <li>
                <NavLink to="/pagestoread">
                  <a>Pages to Read</a>
                </NavLink>
              </li>
              <li>
                <NavLink to="/favbooks">FavBooks</NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  <a>Contact</a>
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/">
            <a className="font-bold text-xl lg:text-3xl">Book Vibe</a>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">
                <a>Home</a>
              </NavLink>
            </li>
            <li></li>
            <li>
              <NavLink to="/listedbooks">
                <a>Listed Books</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/pagestoread">
                <a>Pages to Read</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/favbooks">FavBooks</NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <a>Contact</a>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="px-1 lg:px-6 py-1 lg:py-2 bg-green-500 text-white lg:font-bold rounded-lg">
            Sign In
          </a>
          <a className=" px-1 lg:px-6 py-1 lg:py-2 bg-cyan-500 text-white lg:font-bold rounded-lg">
            Sign Up
          </a>
        </div>
      </div>
      <div className=" h-20"></div>
    </div>
  );
};

export default Nav;
