import React, { useReducer, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchbar.css";

export function SearchBar() {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter(user) => {
            return user && user.name && user.name.toLowerCase().includes(value)
        }
        console.log(results)
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <>
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          placeholder="Type here ...."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </>
  );
}
