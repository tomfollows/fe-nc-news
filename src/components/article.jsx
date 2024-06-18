import React, { useState, useEffect } from "react";
import { getArticle } from "../api";
import { useParams } from "react-router-dom";
import { dateFormat } from "../utils";

const Article = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticle(id).then(({ article }) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.article_img_url} alt={article.title} />
      <br />
      Date: {dateFormat(article.created_at)}
      <p>Author: {article.author}</p>
      <p>{article.body}</p>
    </div>
  );
};

export default Article;
