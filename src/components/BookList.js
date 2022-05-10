import React, {useState} from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

const BookList = () => {
const [selected,setSelected] = useState(null);
  const { loading, error, data } = useQuery(getBooksQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map(({ name, id }) => (
          <div key={id}>
            <li onClick={e=>setSelected(id)}>{name}</li>
          </div>
        ))}
      </ul>
      {selected && <BookDetails bookId = {selected}/>}
    </div>
  );
};

export default BookList;
