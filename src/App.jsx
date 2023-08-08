import React, { useEffect } from "react";
import "./App.scss";
import { useSelector } from "react-redux";
import Loader from "./Components/Loader";
import Routers from "./Routers/Routers";
import AuthContextProvider from "./Context/AuthContext";
import Error from "./Components/Error";

const App = () => {
  const products = [
    {
      id: 1,
      category: "t-shirt",
      name: "Nike",
      price: "40.65",
      image:
        "https://firebasestorage.googleapis.com/v0/b/shopping-redux-5ad57.appspot.com/o/tshirt.png?alt=media&token=04208888-5fb1-41ce-9618-be6c3d684255",
    },
    {
      id: 2,
      category: "shoes",
      name: "Nike Blazer",
      price: "90.65",
      image:
        "https://firebasestorage.googleapis.com/v0/b/shopping-redux-5ad57.appspot.com/o/nikeblazer.png?alt=media&token=62c18bea-5ca7-4b38-a597-a431d59c6dd6",
    },
    {
      id: 3,
      category: "watch",
      name: "Rolex",
      price: "226.05",
      image:
        "https://firebasestorage.googleapis.com/v0/b/shopping-redux-5ad57.appspot.com/o/rolex.png?alt=media&token=8048048c-d0b4-4e90-9345-a7c3abe670cf",
    },
    {
      id: 4,
      category: "shoes",
      name: "Nike AirForce",
      price: "69.10",
      image:
        "https://firebasestorage.googleapis.com/v0/b/shopping-redux-5ad57.appspot.com/o/nikeairforce.png?alt=media&token=799e29e6-6b27-421d-8693-57f130a8de46",
    },
    {
      id: 5,
      category: "shoes",
      name: "Nike Blazer",
      price: "96.50",
      image:
        "https://firebasestorage.googleapis.com/v0/b/shopping-redux-5ad57.appspot.com/o/nikeblazer2.png?alt=media&token=c2d3088a-c47a-4ff8-bd04-5c2728e60fa1",
    },
    {
      id: 6,
      category: "shoes",
      name: "Nike Force H",
      price: "100.00",
      image:
        "https://firebasestorage.googleapis.com/v0/b/shopping-redux-5ad57.appspot.com/o/airforce1high.png?alt=media&token=2a2e732c-36b8-4893-b062-678f86fc3354",
    },
    {
      id: 7,
      category: "watch",
      name: "Rolex",
      price: "350.36",
      image:
        "https://firebasestorage.googleapis.com/v0/b/shopping-redux-5ad57.appspot.com/o/rolex2.png?alt=media&token=252d1116-2605-40b1-a907-127b6e49246c",
    },
  ];
  const {loading} = useSelector((state) => state.loader);
  const { error } = useSelector((state) => state.error);
  // useEffect(() => {
  //   fetch("https://shopping-redux-5ad57-default-rtdb.firebaseio.com/products.json", {
  //     method: "PUT",
  //     body: JSON.stringify(products),
  //   });
  //   console.log('first')
  // }, []);
  return (
    <AuthContextProvider>
      <div className="container">
        {loading ? <Loader /> : error ? <Error/> : ''}
        <Routers />
      </div>
    </AuthContextProvider>
  );
};

export default App;
