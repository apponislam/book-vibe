import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    // const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    const { bookId, image, bookName, author, category, rating, tags } = book;
    return (
        <Link to={`/${bookId}`}>
            <div className="border border-[#13131326] p-6 rounded-2xl w-auto mx-3">
                <img className="w-full mb-6" src={image} alt="" />
                <ul className="mb-4 flex items-center gap-3">
                    {tags.map((tag, idx) => (
                        <li className="bg-[#23BE0A0D] text-[#23BE0A] py-2 px-4 rounded-2xl font-medium worksans" key={idx}>
                            {tag}
                        </li>
                    ))}
                </ul>
                <h1 className="font-bold text-2xl mb-4 playfair">{bookName}</h1>
                <h3 className="font-medium worksans pb-5 mb-5 border-b border-dotted border-[#13131326]">By : {author}</h3>
                <div className="flex items-center justify-between">
                    <p className="font-medium worksans">{category}</p>
                    <div className="flex items-center">
                        <p className="font-medium worksans mr-2">{rating}</p>
                        <FaRegStar />
                    </div>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object,
};

export default Book;
