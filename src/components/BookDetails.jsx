import { useLoaderData, useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

import { saveBook, saveFavBook, saveWishlist } from "../utils";
import { useState } from "react";

const BookDetails = () => {
  const books = useLoaderData();
  const id = useParams();

  const book = books.find((book) => book.bookId == id.id);
  // console.log(book);

  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const [readClick, setReadClick] = useState(false);

  const handleRead = (book) => {
    saveBook(book);
    setReadClick(true)
  };

  const handleWishlist = (book) => {
    saveWishlist(book, readClick);
  };

  const handleFavBook = (book) => {
    saveFavBook(book);
  };

  return (
    <div className="hero lg:max-w-full">
      <div className="hero-content flex-col lg:flex-row gap-8">
        <img src={image} className="lg:max-w-lg rounded-2xl bg-slate-200" />
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p>By : {author}</p>
          <hr />
          <p>{category}</p>
          <hr />
          <p>
            <b>Review: </b> {review}
          </p>
          <div className="flex gap-8">
            <p>
              <b>Tag</b>
            </p>
            {tags.map((tag, idx) => (
              <h1 key={idx} className="text-green-500">
                #{tag}
              </h1>
            ))}
          </div>
          <hr />
          <div className="grid grid-cols-2">
            <p>Number of Pages:</p>
            <p>
              <b>{totalPages}</b>
            </p>
            <p>Publisher:</p>
            <p>
              <b>{publisher}</b>
            </p>
            <p>Year of Publishing: </p>
            <p>
              <b>{yearOfPublishing}</b>
            </p>
            <p>Rating:</p>
            <p>
              <b>{rating}</b>
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => handleRead(book)}
              className="border-2 px-4 py-2 rounded-lg"
            >
              Read
            </button>
            <button
              onClick={() => handleWishlist(book)}
              className="text-white bg-cyan-400 px-4 py-2 rounded-lg"
            >
              Wishlist
            </button>
            <button onClick={() => handleFavBook(book)} className="text-4xl">
              {/*  */}
              <div className="tooltip" data-tip="Add to Favourite">
                <button className=" text-4xl text-pink-400"><CiHeart></CiHeart></button>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
