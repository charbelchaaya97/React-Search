
import React, { useState } from "react";
import "./App.css";
const Search = ({ data }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      const filteredResults = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="  px-4  mt-4">
      <input
        type="text"
        className="form-control search"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
      />
      {results.length > 0 && (
        <p className="mt-2">
          <span className="span-search">{results.length} posts</span> were
          found.
        </p>
      )}
      <ul className="list-group mt-2 ">
        {results.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
