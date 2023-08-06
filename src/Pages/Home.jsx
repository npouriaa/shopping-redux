import React from "react";
import Header from '../Components/Header'
import '../scss/home.scss'
import Cards from "../Components/Cards";

const Home = () => {
  return (
    <div className="home">
      <Header/>
      <Cards/>
    </div>
  );
};

export default Home;
