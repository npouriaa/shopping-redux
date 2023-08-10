import React, { useContext, useEffect, useState } from "react";
import "../scss/card.scss";
import modern from "../assets/images/modern.png";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Button from "./Button";
import Notification from "../Components/Notification";
import AddIcon from "@mui/icons-material/Add";
import { AuthContext } from "../Context/AuthContext";
import { useDispatch } from "react-redux";
import { loaderActions } from "../redux/loaderSlice";
import { notificationActions } from "../redux/notificationSlice";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Card = ({ id, imageSrc, title, price }) => {
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const setToUserCart = async () => {
    if (currentUser) {
      dispatch(loaderActions.setLoading(true));
      try {
        const productsObj = {
          id: id,
          imageSrc,
          title,
          price,
          quantity: 1,
        };
        await updateDoc(doc(db, "usersCarts", currentUser.uid), {
          cart: arrayUnion(productsObj),
        });
        dispatch(notificationActions.setOpen(true));
        dispatch(notificationActions.setSeverity("success"));
        dispatch(notificationActions.setMessage("Added to cart successfuly"));
      } catch (err) {
        dispatch(notificationActions.setOpen(true));
        dispatch(notificationActions.setSeverity("error"));
        dispatch(notificationActions.setMessage(err.message));
      }
      dispatch(loaderActions.setLoading(false));
    }
  };
  useEffect(() => {}, []);
  return (
    <>
      <Notification />
      <div className="card">
        <img className="product-image" src={imageSrc} alt="product-image" />
        <div className="modern-con">
          <img src={modern} className="modern" alt="modern" />
        </div>
        <div className="details">
          <div className="new-badge">NEW</div>
          <h2>{title}</h2>
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
          <h1 className="price">${price}</h1>
          <Button
            route={currentUser ? "" : "/login"}
            type={"add-to-cart-btn"}
            icon={<AddIcon className="icon" />}
            text={"Add to cart"}
            onClick={() => setToUserCart("g")}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
