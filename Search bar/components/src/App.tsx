import "./App.css";
import { SearchBar } from "./components/searchbar";

function App() {
  return (
    <div className="App">
      <div className="search-bar-conrtainer">
        <SearchBar />
        <div>Search results</div>
      </div>
    </div>
  );
}

export default App;
