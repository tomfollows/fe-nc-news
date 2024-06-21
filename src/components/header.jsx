import Nav from "./nav";
import { Link } from "react-router-dom";
import { getArticles } from "../api";
import { useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import react, { useContext } from "react";


const Header = () => {

  const {user} = useContext(UserContext);
  return (
    <div>
    <div className="header">
      <Link to="/"></Link>
      </div>
      <Nav />
   </div>
  );
};

export default Header;

