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
            console.log(books, storedReadBookIds, readedBooks);
        }
    }, [books]);

    const [wishList, setWishList] = useState([]);
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
        }
    }, [books]);

    return (
        <div>
            <div className="bg-[#1313130D] rounded-3xl p-9 mb-8">
                <h1 className="worksans font-bold text-[28px] text-center">Books</h1>
            </div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel>
                    {/* <h1>Read Books {bookReadList.length}</h1> */}
                    <div>
                        {bookReadList.map((book) => (
                            <ListCard key={book.bookId} book={book}></ListCard>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    {/* <h1>Read Books {wishList.length}</h1> */}
                    <div>
                        {wishList.map((book) => (
                            <ListCard key={book.bookId} book={book}></ListCard>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
