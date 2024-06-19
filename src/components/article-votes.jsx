import React, { useState, useEffect } from "react";
import { getArticle, patchArticleVotes } from "../api";

const ArticleVotes = ({ id }) => {
  const [articleVotes, setArticleVotes] = useState(0);
  const [error, setError] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [lastClicked, setLastClicked] = useState(null);

  useEffect(() => {
    getArticle(id)
      .then(({ article }) => {
        setArticleVotes(article.votes);
      })
      .catch((err) => {
        setError(err);
      });
  }, [id]);

  const handleVote = (increment, buttonClicked) => {
    setHasVoted(true);
    setLastClicked(buttonClicked);
    setArticleVotes((currArticleVotes) => currArticleVotes + increment);
    patchArticleVotes(id, { inc_votes: increment }).catch((err) => {
      setArticleVotes((currArticleVotes) => currArticleVotes - increment);
      setError("Sorry, your vote could not be processed");
    });
  };

  const handleUpVote = () => {
    handleVote(1, "like");
  };

  const handleDownVote = () => {
    handleVote(-1, "dislike");
  };

  return (
    <div>
      <button
        onClick={handleUpVote}
        disabled={error || hasVoted}
        className="like-button"
      >
        {lastClicked === "like" ? "Liked" : "Like"}
      </button>
      <p>Votes: {articleVotes}</p>
      <button
        onClick={handleDownVote}
        disabled={error || hasVoted}
        className="dislike-button"
      >
        {lastClicked === "dislike" ? "Disliked" : "Dislike"}
      </button>
    </div>
  );
};

export default ArticleVotes;
