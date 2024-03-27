import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-[calc(100vh-76px)] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src="https://i.ibb.co/kypcNgX/banner.webp"
          
        />
        <div className="lg:mr-8">
          <h1 className=" text-3xl lg:text-5xl font-bold">Books to freshen up 
          <br />your bookshelf</h1>
          
         <Link to='/listedbooks'> <button className="btn bg-green-500 text-white font-bold mt-8">View The List</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
