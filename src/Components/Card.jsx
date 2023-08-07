import React, { useState } from "react";
import "../scss/card.scss";
import tshirt from "../assets/images/tshirt.png";
import modern from "../assets/images/modern.png";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Button from "./Button";
import AddIcon from "@mui/icons-material/Add";

const Card = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="card">
      <img className="product-image" src={tshirt} alt="" />
      <img src={modern} className="modern" alt="" />
      <div className="details">
        <div className="new-badge">NEW</div>
        <h2>Nike</h2>
        <div className="rating">
          <Rating
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            value={rating}
            max={5}
            precision={0.5}
            emptyIcon={<StarIcon className="empty-star star-icon" />}
            icon={<StarIcon className="full-star star-icon" />}
          />
        </div>
        <h1 className="price">$40.64</h1>
        <Button
          route={""}
          type={"add-to-cart-btn"}
          icon={<AddIcon className="icon" />}
          text={'add to cart'}
        />
      </div>
    </div>
  );
};

export default Card;
