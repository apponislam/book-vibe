import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
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
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
