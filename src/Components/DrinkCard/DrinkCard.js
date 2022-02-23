import React, { useState, useEffect } from "react";
import "../DrinkCard/DrinkCard.css";
import { getDrinkInfo } from "../../api/cocktail_db";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ReactLoading from "react-loading";
import { Animated } from "react-animated-css";

const DrinkCard = (props) => {
  const [color, setColor] = useState("");
  const [drink, setDrink] = useState([]);
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  let recipe = [];

  const handleClick = async () => {
    const drink = await getDrinkInfo(props.drinkId);
    setDrink(drink);

    if (!visible) {
      setFading(false);
      setVisible(true);
    } else if (visible) {
      setFading(true);
      setTimeout(() => setVisible(false), 100);
    }
  };

  const getIngredients = () => {
    let ingredients = [];
    let measures = [];
    for (let i = 1; i < 16; i++) {
      if (
        drink[`strIngrient${i}`] !== null ||
        drink[`strIngrient${i}`] !== ""
      ) {
        ingredients.push(drink[`strIngredient${i}`]);
      }
      if (drink[`strMeasure${i}`] !== null || drink[`strMeasure${i}`] !== "") {
        measures.push(drink[`strMeasure${i}`]);
      }
    }

    for (let j = 0; j < ingredients.length; j++) {
      if (!ingredients[j]) {
        break;
      } else if (measures[j]) {
        recipe.push(measures[j] + " " + ingredients[j]);
      } else {
        recipe.push(ingredients[j]);
      }
    }

    return recipe;
  };

  getIngredients();

  useEffect(() => {
    const getColors = () => {
      switch (props.category) {
        case "Ordinary Drink":
        case "cocktails":
          setColor("pink-card");
          break;
        case "Cocktail":
        case "premium-cocktails":
          setColor("blue-card");
          break;
        case "Punch / Party Drink":
        case "party-drinks":
          setColor("red-card");
          break;
        case "Shot":
        case "shots":
          setColor("green-card");
          break;
        case "Homemade Liqueur":
        case "homemade-liqueur":
          setColor("orange-card");
          break;
        case "Beer":
        case "beer":
          setColor("yellow-card");
          break;
        default:
          setColor("purple-card");
          break;
      }
    };

    getColors();
  }, [props.category]);

  return (
    <div className={[color, "drink-card"].join(" ")}>
      <img className="drink-img" src={props?.drinkImg} alt={props?.drinkName} />
      <h1 className="drink-name">
        {props?.drinkName ?? <ReactLoading type="spin" color="#fff" />}
      </h1>
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDuration={100}
        animationOutDuration={100}
        isVisible={!fading}
        style={visible ? null : { display: "none" }}
        className="info-animation"
      >
        <div className="selected-drink-details">
          <h2 className="ingredients-heading">Ingredients:</h2>
          <ul className="ingredients">
            {recipe.map((ingredient, idx) => {
              return <li key={idx}>{ingredient}</li>;
            })}
          </ul>
          <h2 className="instructions-heading">Directions:</h2>
          <p className="instructions">{drink.strInstructions}</p>
        </div>
      </Animated>
      <button className="button" onClick={handleClick}>
        {visible ? (
          <FaChevronUp className="expand-arrow" />
        ) : (
          <FaChevronDown className="collapse-arrow" />
        )}
      </button>
    </div>
  );
};

export default DrinkCard;
