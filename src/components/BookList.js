// @ts-nocheck

import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
    const renderedBoooks = books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>;
    });

    return <div className="book-list">{renderedBoooks}</div>;
}

export default BookList;