import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { getAuthorsQuery, ADD_BOOK,getBooksQuery } from "../queries/queries";

const AddBook = () => {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [addBook] = useMutation(ADD_BOOK,{
      refetchQueries:[
        getBooksQuery
      ]
  });
  let [name, setName] = useState("");
  let [genre, setGenre] = useState("");
  let [authorId, setAuthorId] = useState("");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const submitHandler = (e) => {
    e.preventDefault();
    addBook({ variables: { name: name, genre: genre, authorId: authorId } });
    setName("")
    setGenre("")
    setAuthorId("")
  };
  return (
    <form id="add-book" onSubmit={submitHandler}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Author:</label>
        <select value = {authorId} onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {data.authors.map(({ name, id }) =>
            loading ? (
              <option disabled>Loading authors</option>
            ) : (
              <option key={id} value={id}>
                {name}
              </option>
            )
          )}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBook;
