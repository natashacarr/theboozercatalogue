import React, { useState, useEffect } from "react";
import "../CategoryDetail/CategoryDetail.css";
import { getCategoryDrinks } from "../../api/cocktail_db";
import DrinkCard from "../../Components/DrinkCard/DrinkCard";

const CategoryDetail = ({ match }) => {
  const [drinks, setDrinks] = useState([]);
  const [endpoint, setEndpoint] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getDrinks = async () => {
      const data = await getCategoryDrinks(endpoint);
      setDrinks(data);
    };

    const getEndpoint = () => {
      switch (match.params.category) {
        case "cocktails":
          setEndpoint("Ordinary_Drink");
          setTitle("Cocktails");
          break;
        case "premium-cocktails":
          setEndpoint("Cocktail");
          setTitle("Premium Cocktails");
          break;
        case "party-drinks":
          setEndpoint("Punch_/_Party_Drink");
          setTitle("Party");
          break;
        case "shots":
          setEndpoint("Shot");
          setTitle("Shots");
          break;
        case "homemade-liqueur":
          setEndpoint("Homemade_Liqueur");
          setTitle("Homemade Liqueur");
          break;
        case "beer":
          setEndpoint("Beer");
          setTitle("Beer");
          break;
        default:
          setEndpoint("Other/Unknown");
          setTitle("Miscellaneous");
          break;
      }
    };

    getEndpoint();
    getDrinks();
  }, [endpoint, match.params.category]);

  return (
    <div className="category-detail">
      <h1 className={[endpoint, "title"].join(" ")}>{title}</h1>
      <div className="drink-list">
        {drinks.map((drink) => (
          <DrinkCard
            className="drink-card"
            category={match.params.category}
            key={drink.idDrink}
            drinkId={drink.idDrink}
            drinkName={drink.strDrink}
            drinkImg={drink.strDrinkThumb}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryDetail;
