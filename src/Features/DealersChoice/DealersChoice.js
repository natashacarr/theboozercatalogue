import React, { useState, useEffect } from "react";
import "../DealersChoice/DealersChoice.css";
import RandomCard from "../../Components/RandomCard/RandomCard";
import { getRandomCocktail } from "../../api/cocktail_db";
import { HiOutlineRefresh } from "react-icons/hi";

const DealersChoice = () => {
  const [drink, setDrink] = useState([]);

  const getDrink = async () => {
    const drink = await getRandomCocktail();
    setDrink(drink);
  };

  useEffect(() => {
    getDrink();
  }, []);

  return (
    <div className="dealers-choice">
      <button className="shuffle-btn" onClick={getDrink}>
        <HiOutlineRefresh />
      </button>
      <RandomCard drink={drink} />
    </div>
  );
};

export default DealersChoice;
