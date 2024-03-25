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
                element: <BookDetails></BookDetails>,
            },
            {
                path: "/ListedBooks",
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
