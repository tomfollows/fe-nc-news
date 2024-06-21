import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../api";
import ArticleCard from "./article-card";
import { useNavigate } from "react-router-dom";

const TopicArticles = () => {
  const navigate = useNavigate();
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticlesByTopic(topic)
      .then((response) => setArticles(response))
      .catch((error) => console.error("Error:", error));
  }, [topic]);

  const handleArticleClick = (articleId) => {
    navigate(`/articles/${articleId}`);
  };

  return (
    <div className="articles-grid">
      {articles.map((article) => (
        <ArticleCard
          article={article}
          key={article.article_id}
          onClick={() => handleArticleClick(article.article_id)}
        />
      ))}
    </div>
  );
};

export default TopicArticles;
