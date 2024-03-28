import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import FavBooks from "../pages/FavBooks";
import BookDetails from "../components/BookDetails";
import ReadBooks from "../components/ReadBooks";
import Wishlist from "../components/Wishlist";
import Contact from "../pages/Contact";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                loader: () => fetch('../books.json'),
                element: <Home/>,
            },
            {
                path: '/listedbooks',
                element: <ListedBooks/>,
                children: [
                    {
                        index: true,
                        element: <ReadBooks/>
                    },
                    {
                        path: 'whishlist',
                        element: <Wishlist/>
                    }
                ]
            },
            {
                path: '/book/:id',
                element: <BookDetails />,
                loader: ()=> fetch('../books.json')
            },
            {
                path: '/pagestoread',
                element: <PagesToRead/>
            },
            {
                path: '/favbooks',
                element: <FavBooks/>
            },
            {
                path: '/contact',
                element: <Contact/>
            }
        ]
    }
])