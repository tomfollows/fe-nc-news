import React, { useState, useEffect } from "react";
import { getArticles } from "../api";

const Article = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then(({ articles }) => {
      setArticles(articles);
    });
  }, []);
  return (
    <div>
      <p>Article</p>
    </div>
  );
};

export default Article;
