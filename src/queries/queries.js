import { gql } from "@apollo/client";
export const getBooksQuery = gql`
  query booksQuery {
    books {
      name
      id
    }
  }
`;

export const getAuthorsQuery = gql`
  query authorsQuery {
    authors {
      name
      id
    }
  }
`;

export const getSingleBookQuery = gql`
  query getSingleBookQuery($id:ID!) {
    book(id:$id) {
      id
      name
      genre
      author {
          id
          name
          age
          books{
              name
              id
          }
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
    }
  }
`;
