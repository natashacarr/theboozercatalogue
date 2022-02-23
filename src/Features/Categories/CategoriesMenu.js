import React from "react";
import { Link } from "react-router-dom";
import "../Categories/CategoriesMenu.css";

const CategoriesMenu = () => {
  return (
    <div className="categories-menu">
      <div className="cocktails">
        <Link to="/categories/cocktails" className="link">
          <button className="cocktails-btn">cocktails</button>
        </Link>
      </div>
      <div className="prem-cocktails">
        <Link to="/categories/premium-cocktails" className="link">
          <button className="prem-cocktails-btn">premium cocktails</button>
        </Link>
      </div>
      <div className="party">
        <Link to="/categories/party-drinks" className="link">
          <button className="party-btn">party</button>
        </Link>
      </div>
      <div className="shots">
        <Link to="/categories/shots" className="link">
          <button className="shots-btn">shots</button>
        </Link>
      </div>
      <div className="homemade-liqueur">
        <Link to="/categories/homemade-liqueur" className="link">
          <button className="homemade-liqueur-btn">homemade liqueur</button>
        </Link>
      </div>
      <div className="beer">
        <Link to="/categories/beer" className="link">
          <button className="beer-btn">beer</button>
        </Link>
      </div>
    </div>
  );
};

export default CategoriesMenu;
