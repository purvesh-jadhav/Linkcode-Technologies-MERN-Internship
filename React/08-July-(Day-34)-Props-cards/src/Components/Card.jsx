import React from "react";
import "./Card.css";

const Card = ({ img, pname, cname, desc, price }) => {
  return (
    <div className="card">
      <div className="image-section">
        <img src={img} alt={pname} />
      </div>

      <div className="card-info">
        <h2>{pname}</h2>

        <h4>{cname}</h4>

        <p>{desc}</p>

        <div className="price">{price}</div>

        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default Card;