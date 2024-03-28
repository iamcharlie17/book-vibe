import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getBooks } from "../utils";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storedBooks = getBooks();
    setBooks(storedBooks);
  }, []);

  // console.log(books);
  const autoRefresh = ()=>{
    setInterval(function(){
      location.reload()}, 500);
  }

  const sortByRating = () => {
    console.log(books);
    books.sort((a, b) => (a.rating < b.rating ? 1 : -1));
    localStorage.setItem("books", JSON.stringify(books));
    autoRefresh();
  };

  const sortByPages = () => {
    books.sort((a, b) => (a.totalPages < b.totalPages ? 1 : -1));
    localStorage.setItem("books", JSON.stringify(books));
    autoRefresh();
  };

  const sortByPublishingYear = () => {
    books.sort((a, b) => (a.yearOfPublishing < b.yearOfPublishing ? 1 : -1));
    localStorage.setItem("books", JSON.stringify(books));
    autoRefresh();
  };
  return (
    <div>
      <div className="flex items-center text-center justify-center bg-slate-200 max-w-full rounded-lg  mx-2">
        <h1 className="py-4 font-bold text-3xl">Books</h1>
      </div>
      {/* sort */}
      <div className="flex justify-center my-4">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 px-8 bg-green-500 "
          >
            <h1 className="text-white ">Sort By</h1>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={ sortByRating}>
              <a>Ratings</a>
            </li>
            <li>
              <a onClick={() => sortByPages()}>Number of Pages</a>
            </li>
            <li>
              <a onClick={() => sortByPublishingYear()}>Publishing Year</a>
            </li>
          </ul>
        </div>
      </div>
      {/* tabs */}
      <div className="flex items-center mx-2 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  ">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b-2"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Books</span>
        </Link>
        <Link
          to="whishlist"
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b-2"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist Books</span>
        </Link>
        <div className="border-b-2 w-full pb-6 border-solid border-slate-200 text-white">
          .{" "}
        </div>
      </div>
      <div className="mt-4 mx-2">
        <Outlet />
      </div>
    </div>
  );
};

export default ListedBooks;
