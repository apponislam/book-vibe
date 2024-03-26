import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReadBooks } from "../../Utility/localStorage";

const colors = ["#0085F6", "#00C29C", "#FBB929", "#FF8042", "#FC8042", "#FB0100"];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PageToRead = () => {
    const books = useLoaderData();
    console.log(books);
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

    return (
        <div className="w-full bg-[#13131308] p-24 rounded-3xl mb-32 flex justify-center items-center">
            <BarChart
                className="w-full"
                width={1000}
                height={500}
                data={bookReadList}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: "top" }}>
                    {bookReadList.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

TriangleBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default PageToRead;
