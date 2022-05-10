import React from "react";
import { useQuery } from "@apollo/client";
import { getSingleBookQuery } from "../queries/queries";

const BookDetails = ({bookId}) => {

  const { loading, error, data } = useQuery(getSingleBookQuery, {
    variables: { id: bookId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  let displayBookDetails = () => {
    let { book } = data;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All Books by this author</p>
          <ul className="other-books"></ul>
          {book.author.books.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </div>
      );
    }
  };
  return (
    <div id="book-details">
      <p>Output book details here</p>
      {displayBookDetails()}
    </div>
  );
};

export default BookDetails;
