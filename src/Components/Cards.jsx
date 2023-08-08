import React, { useEffect } from "react";
import "../scss/cards.scss";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { loaderActions } from "../redux/loaderSlice";
import axios from "axios";
import { productsActions } from "../redux/productsSlice";

const Cards = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const getProducts = async () => {
    dispatch(loaderActions.setLoading(true));
    try {
      const response = await axios.get(
        "https://shopping-redux-5ad57-default-rtdb.firebaseio.com/products.json"
      );
      dispatch(productsActions.setProducts(response.data));
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
    dispatch(loaderActions.setLoading(false));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="cards-con">
      {products.map((product) => (
        <Card
          imageSrc={product.image}
          title={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Cards;
