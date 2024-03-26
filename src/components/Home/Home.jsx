import { Link, useLoaderData } from "react-router-dom";
import ToKillaMockingbird from "/ToKillaMockingbird.jpg";
import Book from "../Book/Book";

const Home = () => {
    const books = useLoaderData();

    return (
        <div>
            <div className="bg-[#1313130D] rounded-3xl py-4 md:py-[80px] px-4 md:px-32 flex items-center justify-between mb-6 md:mb-[100px] flex-col md:flex-row mx-3 md:mx-0">
                <div className="mb-4 md:mb-0">
                    <h1 className="font-bold text-3xl md:text-[56px] mb-4 md:mb-12 playfair text-center md:text-left leading-loose">
                        Books to freshen up <br className="hidden md:block" /> your bookshelf
                    </h1>
                    <Link to="/ListedBooks">
                        <button className="worksans btn mr-4 font-bold bg-[#23BE0A] py-[18px] px-7 text-white h-auto text-[20px]">View The List</button>
                    </Link>
                </div>
                <div>
                    <img className="w-[318px] rounded-3xl" src={ToKillaMockingbird} />
                </div>
            </div>

            <div className="mb-32">
                <h1 className="text-center font-bold text-[40px] mb-9 playfair">Books</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 w-full">
                    {books.map((book) => (
                        <Book key={book.bookId} book={book}></Book>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
