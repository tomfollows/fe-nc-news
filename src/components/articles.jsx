import React, { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "/Users/follot1/Northcoders/fe-nc-news/src/components/article-card";
import { useNavigate, useParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then(({ articles }) => {
      setArticles(articles);
    });
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <div className="articles-grid">
        {articles.map((article, index) => {
          const date = new Date(article.created_at);
          const formattedDate = date.toLocaleDateString();
          return (
            <ArticleCard
              key={index}
              article={article}
              createdDate={formattedDate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
