import { Fragment, useState } from "react";
import Font from "react-fonts";

export function SearchBar() {
  return (
    <>
      <div className="search-bar-container">
        <div className="serach-bar">
          <h1>Search bar</h1>
        </div>
        <div className="search-suggestion">
          <h1>Search Suggestions</h1>
        </div>
      </div>
    </>
  );
}
