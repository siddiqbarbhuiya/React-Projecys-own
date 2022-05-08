import React, { useEffect, useRef, useState } from "react";

const SearchBar = ({ setQuery,isLoading }) => {
  const [text, setText] = useState("");
  // const inputRef = useRef(null);

  // useEffect(()=> inputRef.current.focus())

  const handleSubmit = e=> {
    setText(e.target.value);
    setQuery(e.target.value)
  }
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          // ref={inputRef}
          autoFocus
          type="text"
          value={text}
          className="form_control"
          placeholder="Search Recipe"
          onChange={handleSubmit}
          // disabled={isLoading}
        />
        <input type="submit"
        className="btn"
        value="Search" />
      </form>
    </div>
  );
};

export default SearchBar;
