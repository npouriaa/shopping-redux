import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

const Home = () => {
  return (
    <div>
      <button onClick={() => signOut(auth)}>sign out</button>
    </div>
  );
};

export default Home;
