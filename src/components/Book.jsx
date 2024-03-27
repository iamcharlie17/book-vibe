import { CiStar } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Book = ({book}) => {
    const {bookId,image, tags, bookName, author, category, rating} = book;
    return (
        <NavLink id = {bookId} to={`/book/${bookId}`}>
            <div className="border-2 border-dotted border-slate-300 rounded-lg ">
            <div className="flex justify-center bg-slate-200 p-4 m-8 rounded-lg">
                <img src={image} className="h-52 " alt="" />
            </div>
            <div className="m-8 space-y-4">
                <div className="flex gap-4">
                    {
                        tags.map((tag,idx)=> (<h1 key={idx} className="text-green-500">{tag}</h1>))
                    }
                </div>
                <h1 className="text-2xl font-bold">{bookName}</h1>
                <p>By : {author}</p>
                <hr />
                <div className="flex justify-between">
                    <h1>{category}</h1>
                    <div className="flex gap-2 justify-end items-center">
                        <h1>{rating}</h1>
                        <CiStar/>
                    </div>
                </div>
            </div>
        </div>
        </NavLink>
    );
};

export default Book;