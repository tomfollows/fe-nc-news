import React, { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "/Users/follot1/Northcoders/fe-nc-news/src/components/article-card";
import { useNavigate } from "react-router-dom";

const Loading = ({ styleName }) => {
  return <div className={styleName}>Loading...</div>;
};

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleOnCLickArticle = (article) => {
    navigate(`/articles/${article.article_id}`);
  };

  const navigate = useNavigate();

  useEffect(() => {
    getArticles().then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading styleName="Loading"></Loading>;

  return (
    <div>
      <h1>All Articles</h1>
      <div className="articles-grid">
        {articles.map((article) => {
          const date = new Date(article.created_at);
          const formattedDate = date.toLocaleDateString();
          return (
            <ArticleCard
              key={article.article_id}
              article={article}
              createdDate={formattedDate}
              onClick={() => handleOnCLickArticle(article)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
