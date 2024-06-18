import React, { useState, useEffect } from "react";
import { getArticle, handleVote } from "../api";
import { useParams } from "react-router-dom";
import { dateFormat } from "../utils";
import CommentCard from "./comment-card";

const Article = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const [votes, setVotes] = useState();

  useEffect(() => {
    setIsLoading(true);
    getArticle(id).then(({ article }) => {
      setArticle(article);
      setIsLoading(false);
      setVotes(article.votes);
    });
  }, [id]);

  const handleUpVote = () => {
    handleVote(id).then((data) => console.log(data));
  };
  const handleDownVote = () => {
    handleVote(id).then((data) => console.log(data));
  };

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.article_img_url} alt={article.title} />
      <br />
      Date: {dateFormat(article.created_at)}
      <p>Author: {article.author}</p>
      <p>{article.body}</p>
      <p>{article.votes}</p>
      <button onClick={handleUpVote}>Like</button>
      <button onClick={handleDownVote}>Dislike</button>
      <CommentCard id={id} />
      
    </div>
  );
};

export default Article;
