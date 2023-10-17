import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/ListGroup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
