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
import { setReadBooks } from "./Utility/localStorage.js";

const readBtn = (book) => {
    // console.log("Button clicked!", book);
    const id = book.bookId;
    // console.log(id);
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
                element: <BookDetails readBtn={readBtn}></BookDetails>,
            },
            {
                path: "/ListedBooks",
                loader: () => fetch("books.json"),
                element: <ListedBooks></ListedBooks>,
            },
            {
                path: "/PageToRead",
                element: <PageToRead></PageToRead>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
