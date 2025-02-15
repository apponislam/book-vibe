import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import Error from "./components/Error/Error.jsx";
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx";
import PageToRead from "./components/PageToRead/PageToRead.jsx";
import { toast } from "react-toastify";
import { getReadBooks, getWishListBooks, setReadBooks, setWishListBooks } from "./Utility/localStorage.js";
import Upcoming from "./components/Upcoming/Upcoming.jsx";
import Contact from "./components/Contact/Contact.jsx";

const readBtn = (book) => {
    const id = book.bookId;
    const readedItems = getReadBooks();
    console.log(readedItems);
    if (readedItems.includes(id)) {
        toast.error("You Have Already Read This Book", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    } else {
        setReadBooks(id);
        toast.success("Book Added to Read List", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
};

const wishListBtn = (book) => {
    const id = book.bookId;
    const wishListedItems = getWishListBooks();
    console.log(wishListedItems);
    const readedItems = getReadBooks();
    if (readedItems.includes(id)) {
        if (wishListedItems.includes(id)) {
            toast.error("Book Already in WishList", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.error("You Have Already Read This Book", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    } else {
        setWishListBooks(id);
        if (wishListedItems.includes(id)) {
            toast.error("Book Already in WishList", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.success("Book Added to WishList", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                loader: () => fetch("books.json"),
                element: <Home></Home>,
            },
            {
                path: "/:bookId",
                // loader: ({ params }) => fetch(`books.json/${params.bookId}`),
                loader: () => fetch("books.json"),
                element: <BookDetails readBtn={readBtn} wishListBtn={wishListBtn}></BookDetails>,
            },
            {
                path: "/ListedBooks",
                loader: () => fetch("books.json"),
                element: <ListedBooks></ListedBooks>,
            },
            {
                path: "/PageToRead",
                loader: () => fetch("books.json"),
                element: <PageToRead></PageToRead>,
            },
            {
                path: "/Upcoming",
                loader: () => fetch("upcoming.json"),
                element: <Upcoming></Upcoming>,
            },
            {
                path: "/Contact",
                element: <Contact></Contact>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
