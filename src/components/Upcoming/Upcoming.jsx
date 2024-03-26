import { useLoaderData } from "react-router-dom";
import UpcomingBook from "../UpcomingBook/UpcomingBook";

const Upcoming = () => {
    const books = useLoaderData();
    console.log(books);

    return (
        <div>
            <div className="mb-32">
                <h1 className="text-center font-bold text-[40px] mb-9 playfair">Books</h1>

                <div className="grid grid-cols-3 gap-6">
                    {books.map((book) => (
                        <UpcomingBook key={book.Id} book={book}></UpcomingBook>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Upcoming;
