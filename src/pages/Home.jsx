import Banner from "../components/Banner";
import Books from "../components/Books";



const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-12">
                <Books></Books>
            </div>
        </div>
    );
};

export default Home;