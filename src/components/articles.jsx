import React, { useEffect, useState, useContext  } from "react";
import { getArticles } from "../api";
import ArticleCard from "/Users/follot1/Northcoders/fe-nc-news/src/components/article-card";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../UserContext';

const Loading = ({ styleName }) => {
  return <div className={styleName}>Loading...</div>;
};

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserContext);

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
      <h1>Welcome {user ? user.name : 'Guest'} to The FollowUp</h1> <br />
      <h2>You are viewing: All Articles</h2>
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
