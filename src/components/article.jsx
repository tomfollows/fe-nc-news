import React, { useState, useEffect } from "react";
import { getArticle, getArticlesByTopic } from "../api";
import { useParams } from "react-router-dom";
import { dateFormat } from "../utils";
import CommentCard from "./comment-card";
import ArticleVotes from "./article-votes";

const Article = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticle(id).then(({ article }) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.article_img_url} alt={article.title} />
      <br />
      Date: {dateFormat(article.created_at)}
      <p>Author: {article.author}</p>
      <p>{article.body}</p>
      <ArticleVotes id={id} />
      <CommentCard id={id} />
    </div>
  );
};

export default Article;
