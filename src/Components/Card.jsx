import React from "react";
import "../scss/card.scss";
import tshirt from "../assets/images/tshirt.png";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { ratingAction } from "../redux/ratingSlice";

const Card = () => {
  const { rating } = useSelector((state) => state.rating);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <img src={tshirt} alt="" />
      <h1 className="modern">modern</h1>
      <div className="details">
        <div className="new-badge">NEW</div>
        <h2>Nike</h2>
        <h1 className="price">$40.64</h1>
        <div className="rating">
          <Rating
            onChange={(event, newValue) => {
              dispatch(ratingAction.setRating(newValue));
            }}
            value={rating}
            max={5}
            precision={0.5}
            emptyIcon={<StarIcon style={{ color: "#e6e6e6" }} />}
            icon={<StarIcon style={{ color: "#ffc107" }} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
