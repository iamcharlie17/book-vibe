import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Books from "../components/Books";



const Home = () => {
    const books = useLoaderData();
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-12">
                <Books books = {books}></Books>
            </div>
        </div>
    );
};

export default Home;