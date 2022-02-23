import React, { useEffect, useState } from "react";
import "../SearchResults/SearchResults.css";
import { getSearchResults } from "../../api/cocktail_db";
import DrinkCard from "../../Components/DrinkCard/DrinkCard";
import NoResults from "../../Features/NoResults/NoResults";

const SearchResults = ({ match }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      const data = await getSearchResults(match.params.search);
      setResults(data.drinks);
    };

    getResults();
  }, [match.params.search]);

  return (
    <div className="search-results">
      {results ? (
        <div className="results-list">
          {results.map((result) => {
            return (
              <DrinkCard
                className="result-card"
                category={result.strCategory}
                key={result.idDrink}
                drinkId={result.idDrink}
                drinkName={result.strDrink}
                drinkImg={result.strDrinkThumb}
              />
            );
          })}
        </div>
      ) : (
        <NoResults />
      )}
    </div>
  );
};

export default SearchResults;
