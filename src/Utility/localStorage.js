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

const getWishListBooks = () => {
    const storeWishListBooks = localStorage.getItem("WishListBooks");
    if (storeWishListBooks) {
        return JSON.parse(storeWishListBooks);
    }
    return [];
};

const setWishListBooks = (id) => {
    const storeWishListBooks = getWishListBooks();
    const exist = storeWishListBooks.find((Id) => Id === id);
    const exist2 = JSON.stringify(exist);
    if (!exist2) {
        storeWishListBooks.push(id);
        localStorage.setItem("WishListBooks", JSON.stringify(storeWishListBooks));
    }
};

export { getReadBooks, setReadBooks, getWishListBooks, setWishListBooks };
