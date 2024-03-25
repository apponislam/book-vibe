import { Link, useLoaderData } from "react-router-dom";
import ToKillaMockingbird from "/ToKillaMockingbird.jpg";
import Book from "../Book/Book";

const Home = () => {
    const books = useLoaderData();
    // console.log(books);

    return (
        <div>
            <div className="bg-[#1313130D] rounded-3xl py-[80px] px-32 flex items-center justify-between mb-[100px]">
                <div>
                    <h1 className="font-bold text-[56px] mb-12 playfair">
                        Books to freshen up <br /> your bookshelf
                    </h1>
                    <Link>
                        <button className="worksans btn mr-4 font-bold bg-[#23BE0A] py-[18px] px-7 text-white h-auto text-[20px]">View The List</button>
                    </Link>
                </div>
                <div>
                    <img className="w-[318px] rounded-3xl" src={ToKillaMockingbird} />
                </div>
            </div>

            <div className="mb-32">
                <h1 className="text-center font-bold text-[40px] mb-9 playfair">Books</h1>

                <div className="grid grid-cols-3 gap-6">
                    {books.map((book) => (
                        <Book key={book.bookId} book={book}></Book>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
