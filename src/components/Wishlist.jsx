import { useEffect, useState } from "react";
import { getWishlists } from "../utils";
import { Link } from "react-router-dom";

const Wishlist = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
      const storedBooks = getWishlists();
      setBooks(storedBooks);
    }, []);
    console.log(books);
  
    //   const{image,bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating} = books;
  
    return (
      <div className=" space-y-8">
        {books.map((book) => (
          <div key={book.bookId} className="">
            <div className=" border-2 border-dotted  ">
              <div className=" p-8 flex flex-col lg:flex-row gap-8 items-center ">
                <img
                  src={book.image}
                  className="lg:max-w-sm  bg-slate-200 rounded-xl w-96 "
                />
  
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold">{book.bookName}</h1>
                  <p>By : {book.author}</p>
                  <div className="flex gap-4 flex-wrap">
                    <p>Tags</p>
                    {book.tags.map((tag, idx) => (
                      <h1
                        key={idx}
                        className="bg-green-100 text-green-500 rounded-lg px-2"
                      >
                        #{tag}
                      </h1>
                    ))}
                    <p>Publishing year: {book.yearOfPublishing}</p>
                  </div>
                  <div className="flex gap-4">
                    <p>Publisher: {book.publisher}</p>
                    <p>Page {book.totalPages}</p>
                  </div>
                  <hr />
                  <div className="flex gap-4 items-center flex-wrap">
                      <p className="text-blue-500 bg-blue-100 px-2 rounded-lg">Category: {book.category}</p>
                      <p className="text-amber-300 bg-orange-50 px-2 rounded-lg">Rating: {book.rating}</p>
                     <Link id = {book.bookId} to={`/book/${book.bookId}`}> <button className=" bg-green-500 text-white rounded-2xl py-1 px-4">View Details</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
export default Wishlist;