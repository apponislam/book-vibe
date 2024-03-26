import { useLoaderData } from "react-router-dom";
import UpcomingBook from "../UpcomingBook/UpcomingBook";

const Upcoming = () => {
    const books = useLoaderData();
    console.log(books);

    return (
        <div>
            <div className="mb-32">
                <h1 className="text-center font-bold text-[40px] mb-9 playfair">Upcoming Books</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 w-full">
                    {books.map((book) => (
                        <UpcomingBook key={book.Id} book={book}></UpcomingBook>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Upcoming;
