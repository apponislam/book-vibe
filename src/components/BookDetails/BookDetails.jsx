import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

const BookDetails = ({ readBtn, wishListBtn }) => {
    const bookAll = useLoaderData();
    const id = useParams();
    const numID = parseInt(id.bookId);
    // console.log(numID);
    // console.log(bookAll);

    const book = bookAll.find((book) => book.bookId === numID);
    // console.log(book);
    // const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    // const notify = () => toast("Wow so easy!");

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 mb-40 mx-3 md:mx-0">
            <div>
                <img className="w-full" src={image} />
            </div>
            <div>
                <h1 className="font-bold text-[30px] playfair mb-4">{bookName}</h1>
                <h3 className="worksans font-medium text-xl pb-5">By : {author}</h3>
                <h4 className="worksans font-medium text-xl py-4 border-y border-[#13131326] mb-4">{category}</h4>
                <h5 className="font-medium worksans mb-6">
                    <span className="font-bold">Review : </span>
                    {review}
                </h5>
                <ul className="flex items-center gap-3 worksans pb-5 mb-5 border-b border-[#13131326]">
                    <li className="font-bold">Tag</li>
                    {tags.map((tag, idx) => (
                        <li className="bg-[#23BE0A0D] text-[#23BE0A] py-2 px-4 rounded-2xl font-medium worksans" key={idx}>
                            #{tag}
                        </li>
                    ))}
                </ul>
                <div className="flex items-center mb-3 worksans">
                    <p className="w-44 md:w-56">Number of Pages : </p>
                    <p className="font-semibold"> {totalPages}</p>
                </div>
                <div className="flex items-center mb-3 worksans">
                    <p className="w-44 md:w-56">Publisher : </p>
                    <p className="font-semibold">{publisher}</p>
                </div>
                <div className="flex items-center mb-3 worksans">
                    <p className="w-44 md:w-56">Year of Publishing : </p>
                    <p className="font-semibold">{yearOfPublishing}</p>
                </div>
                <div className="flex items-center mb-3 worksans">
                    <p className="w-44 md:w-56">Rating : </p>
                    <p className="font-semibold">{rating}</p>
                </div>
                <div className="worksans text-[18px]">
                    <button onClick={() => readBtn(book)} className="btn text-black bg-transparent border border-black mr-4 py-[18px] px-[28px] h-auto">
                        Read
                    </button>
                    <button onClick={() => wishListBtn(book)} className="btn bg-[#50B1C9] text-white py-[18px] px-[28px] h-auto">
                        Wishlist
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

BookDetails.propTypes = {
    readBtn: PropTypes.func,
    wishListBtn: PropTypes.func,
};
export default BookDetails;
