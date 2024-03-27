const Nav = () => {
  return (
    <div>
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
              <a>Home</a>
            </li>
            <li></li>
            <li>
              <a>Listed Books</a>
            </li>
            <li>
              <a>Pages to Read</a>
            </li>
            <li>
              <a>FavBooks</a>
            </li>
            <li>
              <a>Category</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li></li>
          <li>
            <a>Listed Books</a>
          </li>
          <li>
            <a>Pages to Read</a>
          </li>
          <li>
            <a>FavBooks</a>
          </li>
          <li>
            <a>Category</a>
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
