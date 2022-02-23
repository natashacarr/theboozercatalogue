import React from "react";
import "../NoResults/NoResults.css";
import { GiShatteredGlass } from "react-icons/gi";

const NoResults = () => {
  return (
    <div className="no-results">
      <GiShatteredGlass className="no-results-icon" />
      <p className="no-results-text">No matches!</p>
    </div>
  );
};

export default NoResults;
