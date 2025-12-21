// @ts-nocheck

import useBooksContext from "../hooks/use-books-context";
import BookShow from "./BookShow";

function BookList() {
    const { books } = useBooksContext();

    const renderedBoooks = books.map((book) => {
        return <BookShow key={book.id} book={book} />;
    });

    return (
        <div className="book-list">
            {renderedBoooks}
        </div>
    );
}

export default BookList;