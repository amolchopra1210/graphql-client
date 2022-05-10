import "./App.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <h1>Amol's Reading List</h1>
      <BookList />
      <AddBook />
    </div>
  );
}

export default App;
