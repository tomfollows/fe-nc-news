import Nav from "./nav";
import { Link } from "react-router-dom";
import SortBy from "./sortBy";
import { getArticles } from "../api";
import { useEffect, useState } from "react";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">The FollowUp</Link>
      <Nav />
      <SortBy />
    </div>
  );
};

export default Header;
