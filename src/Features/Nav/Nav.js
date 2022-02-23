import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Nav/Nav.css";
import { FiSearch } from "react-icons/fi";

const Nav = () => {
  const [search, setSearch] = useState("");
  let history = useHistory();

  const handleChange = (search) => {
    setSearch(search.target.value);
  };

  const enter = (e) => {
    e.preventDefault();
    history.push(`/${search}`);
  };

  return (
    <div className="navbar">
      <Link to="/categories">
        <button className="categories-btn">categories</button>
      </Link>
      <Link to="/dealers-choice">
        <button className="dealers-choice-btn">dealer's choice</button>
      </Link>
      <div className="search-area">
        <form className="searchbar" onSubmit={enter}>
          <input
            className="search-input"
            type="text"
            value={search}
            placeholder="Search..."
            onChange={handleChange}
          />
          <Link to={`/${search}`}>
            <FiSearch className="search-button" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Nav;
