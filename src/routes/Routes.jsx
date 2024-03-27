import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import FavBooks from "../pages/FavBooks";
import Category from "../pages/Category";
import BookDetails from "../components/BookDetails";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: '/listedbooks',
                element: <ListedBooks/>
            },
            {
                path: '/book/:id',
                element: <BookDetails />,
                loader: ()=> fetch('/public/books.json')
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
                path: '/category',
                element: <Category/>
            }
        ]
    }
])