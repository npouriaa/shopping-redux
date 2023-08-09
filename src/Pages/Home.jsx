import React from "react";
import Header from '../Components/Header'
import '../scss/home.scss'
import Cards from "../Components/Cards";
import SearchBar from "../Components/SearchBar";

const Home = () => {
  return (
    <div className="home">
      <Header/>
      <SearchBar/>
      <Cards/>
    </div>
  );
};

export default Home;
