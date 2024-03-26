const getReadBooks = () => {
    const storeReadBooks = localStorage.getItem("ReadBooks");
    if (storeReadBooks) {
        return JSON.parse(storeReadBooks);
    }
    return [];
};

const setReadBooks = (id) => {
    const storeReadBooks = getReadBooks();
    const exist = storeReadBooks.find((Id) => Id === id);
    const exist2 = JSON.stringify(exist);
    if (!exist2) {
        storeReadBooks.push(id);
        localStorage.setItem("ReadBooks", JSON.stringify(storeReadBooks));
    }
};

export { getReadBooks, setReadBooks };
