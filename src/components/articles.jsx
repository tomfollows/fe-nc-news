import React, { useEffect, useState, useContext } from "react";
import { getArticles } from "../api";
import ArticleCard from "./article-card";
import { useNavigate} from "react-router-dom";
import { UserContext } from "../UserContext";


const Loading = ({ styleName }) => {
  return <div className={styleName}>Loading...</div>;
};

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserContext);
  const [order, setOrder] = useState("desc");
  const [sortBy, setSortBy] = useState("date");



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

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  const sortedArticles = [...articles].sort((a, b) => {
    if (sortBy === "date") {
      if (order === "asc") {
        return new Date(a.created_at) - new Date(b.created_at);
      } else {
        return new Date(b.created_at) - new Date(a.created_at);
      }
    } else if (sortBy === "comment") {
      if (order === "asc") {
        return a.comment_count - b.comment_count;
      } else {
        return b.comment_count - a.comment_count;
      }
    } else if (sortBy === "votes") {
      if (order === "asc") {
        return a.votes - b.votes;
      } else {
        return b.votes - a.votes;
      }
    }
    return 0;
  });

  if (isLoading) return <Loading styleName="Loading"></Loading>;

  return (
    <div>
      <h1>Welcome {user ? user : "Guest"} to The FollowUp</h1> <br />
      <div className="controllers-wrapper">
        <label>
          Sort by:
          <select onChange={handleSortChange}>
            <option value="date">Date</option>
            <option value="comment">Comment Count</option>
            <option value="votes">Votes</option>
          </select>
        </label>
        <label>
          Order:
          <select onChange={handleOrderChange}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </label>
      </div>
      <h2>You are viewing: All Articles</h2>
      <div className="articles-grid">
        {sortedArticles.map((article) => {
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
