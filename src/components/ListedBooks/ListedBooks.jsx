import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../index.css";
import { useLoaderData } from "react-router-dom";
import { getReadBooks, getWishListBooks } from "../../Utility/localStorage";
import ListCard from "../ListCard/ListCard";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const books = useLoaderData();
    const [bookReadList, setBookReadList] = useState([]);
    const [displayBookList, setDisplayBookList] = useState([]);

    const handleClick = (filter) => {
        // setDisplayBookList(bookReadList);
        if (filter === "Rating") {
            const filteredData = bookReadList.filter((item) => item.rating >= 0);
            filteredData.sort((a, b) => b.rating - a.rating);
            setDisplayBookList(filteredData);
            const filteredData2 = wishList.filter((item) => item.rating >= 0);
            filteredData2.sort((a, b) => b.rating - a.rating);
            setDisplayWishList(filteredData2);
        } else if (filter === "Number of pages") {
            const filteredData = bookReadList.filter((item) => item.totalPages >= 0);
            filteredData.sort((a, b) => b.totalPages - a.totalPages);
            setDisplayBookList(filteredData);
            const filteredData2 = wishList.filter((item) => item.totalPages >= 0);
            filteredData2.sort((a, b) => b.totalPages - a.totalPages);
            setDisplayWishList(filteredData2);
        } else if (filter === "Publisher year") {
            const filteredData = bookReadList.filter((item) => item.yearOfPublishing >= 0);
            filteredData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setDisplayBookList(filteredData);
            const filteredData2 = wishList.filter((item) => item.yearOfPublishing >= 0);
            filteredData2.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setDisplayWishList(filteredData2);
        }
    };

    useEffect(() => {
        const storedReadBookIds = getReadBooks();
        if (books.length > 0) {
            const readedBooks = [];
            for (const id of storedReadBookIds) {
                const book = books.find((book) => book.bookId == id);
                if (book) {
                    readedBooks.push(book);
                }
            }
            setBookReadList(readedBooks);
            setDisplayBookList(readedBooks);
            console.log(books, storedReadBookIds, readedBooks);
        }
    }, [books]);

    const [wishList, setWishList] = useState([]);
    const [displayWishList, setDisplayWishList] = useState([]);
    useEffect(() => {
        const storedWishListBookIds = getWishListBooks();
        if (books.length > 0) {
            const wishListedBooks = [];
            for (const id of storedWishListBookIds) {
                const book = books.find((book) => book.bookId == id);
                if (book) {
                    wishListedBooks.push(book);
                }
            }
            setWishList(wishListedBooks);
            setDisplayWishList(wishListedBooks);
        }
    }, [books]);

    return (
        <div className="mb-28">
            <div className="bg-[#1313130D] rounded-3xl p-9 mb-8 mx-3 md:mx-0">
                <h1 className="worksans font-bold text-[28px] text-center">Books</h1>
            </div>
            <div className="flex justify-center mb-14">
                <details className="dropdown w-40">
                    <summary className="m-1 btn bg-[#23BE0A] w-full text-white worksans font-semibold text-[18px]">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full text-center worksans gap-3">
                        <li onClick={() => handleClick("Rating")}>Rating</li>
                        <li onClick={() => handleClick("Number of pages")}>Number of pages</li>
                        <li onClick={() => handleClick("Publisher year")}>Publisher year</li>
                    </ul>
                </details>
            </div>
            <div className="mx-3 md:mx-0">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>
                    <TabPanel>
                        {/* <h1>Read Books {bookReadList.length}</h1> */}
                        <div>
                            {displayBookList.map((book) => (
                                <ListCard key={book.bookId} book={book}></ListCard>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        {/* <h1>Read Books {wishList.length}</h1> */}
                        <div>
                            {displayWishList.map((book) => (
                                <ListCard key={book.bookId} book={book}></ListCard>
                            ))}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedBooks;
