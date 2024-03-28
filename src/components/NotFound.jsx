import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-7xl">404</h1>
            <p className="text-xl">Not Found</p>
            <Link to='/'><button className="btn bg-green-500 text-white px-8 rounded-lg py-1 border-none">Home</button></Link>
        </div>
    );
};

export default NotFound;