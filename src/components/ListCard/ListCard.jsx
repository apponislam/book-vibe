import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { LuBookOpenCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

const ListCard = ({ book }) => {
    // const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    const { image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating, bookId } = book;
    return (
        <div className="border border-[#13131326] rounded-2xl p-3 md:p-6 mb-3 md:mb-6">
            <div className="flex gap-6 flex-col md:flex-row">
                <div>
                    <img className="w-full md:h-64" src={image} alt="" />
                </div>
                <div className="flex-1">
                    <h1 className="font-bold text-2xl playfair mb-4">{bookName}</h1>
                    <h3 className="font-medium worksans mb-4">By : {author}</h3>
                    <ul className="flex md:items-center gap-3 worksans mb-4 worksans flex-col md:flex-row">
                        <li className="font-bold">Tag</li>
                        {tags.map((tag, idx) => (
                            <li className="bg-[#23BE0A0D] text-[#23BE0A] py-2 px-4 rounded-2xl font-medium worksans" key={idx}>
                                #{tag}
                            </li>
                        ))}
                        <li className="flex gap-2 items-center">
                            <CiLocationOn className="text-2xl" />
                            Year of Publishing : {yearOfPublishing}
                        </li>
                    </ul>
                    <div className="flex md:items-center flex-col md:flex-row gap-4 mb-4 pb-4 border-b border-[#13131326]">
                        <div className="flex items-center gap-2 worksans">
                            <LiaUserFriendsSolid className="text-2xl" />
                            <p>Publisher : {publisher}</p>
                        </div>
                        <div className="flex items-center gap-2 worksans">
                            <LuBookOpenCheck className="text-2xl" />
                            <p>Pages : {totalPages}</p>
                        </div>
                    </div>
                    <div className="flex md:items-center worksans gap-3 flex-col md:flex-row">
                        <button className="btn py-3 px-5 h-auto rounded-3xl text-[#328EFF] bg-[#328EFF26]">Category: {category}</button>
                        <button className="btn py-3 px-5 h-auto rounded-3xl text-[#FFAC33] bg-[#FFAC3326]">Rating: {rating}</button>
                        <Link to={`/${bookId}`}>
                            <button className="btn py-3 px-5 h-auto rounded-3xl text-white bg-[#23BE0A] font-medium text-[18px] w-full md:w-auto">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ListCard.propTypes = {
    book: PropTypes.object,
};

export default ListCard;
