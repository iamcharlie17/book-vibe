import toast from "react-hot-toast";
export const getBooks = () => {
  let books = [];
  let storedbooks = localStorage.getItem("books");
  if (storedbooks) {
    books = JSON.parse(storedbooks);
  }
  return books;
};

export const getWishlists = () => {
  let wishlists = [];
  let storedWishlists = localStorage.getItem("wishlists");
  if (storedWishlists) {
    wishlists = JSON.parse(storedWishlists);
  }
  return wishlists;
};


export const getFavBooks = () => {
  let favbooks = [];
  let storedFavBooks = localStorage.getItem("favbooks");
  if (storedFavBooks) {
    favbooks = JSON.parse(storedFavBooks);
  }
  return favbooks;
};
export const saveFavBook = (book) => {
  let favbooks = getFavBooks("favbooks");
  const isExist = favbooks.find((b) => b.bookId === book.bookId);

  if (!isExist) {
    favbooks.push(book);
    localStorage.setItem('favbooks', JSON.stringify(favbooks));
    toast.success("Book added to fav books successfully");
    
  }
  else{
    toast.error("Already added to Favourite books")
  }
};

export const saveBook = (book) => {
  let books = getBooks();
  const isExist = books.find((b) => b.bookId === book.bookId);
  if (!isExist) {
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    toast.success("Book added to list of books successfully");
  } else {
    return toast.error("Already added to list of books");
  }
};

export const saveWishlist = (book, readClick) => {
  let wishlists = getWishlists();
  const isExist = wishlists.find((w) => w.bookId === book.bookId);
  if(!readClick){
    if (!isExist) {
      wishlists.push(book);
      localStorage.setItem("wishlists", JSON.stringify(wishlists));
      toast.success("Book added to wishlist successfully");
    } else {
      return toast.error("Already added ot wishlist");
    }
  }
  else{
    toast.error('You already read the book');
  }
};
