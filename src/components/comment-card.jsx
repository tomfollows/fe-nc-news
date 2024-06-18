import React, { useState, useEffect } from "react";
import { getComments } from "../api";
import { dateFormat } from "../utils";

const CommentCard = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    getComments(id).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Comments</h2>
      <ul className="comment-card">
        {comments.map((comment) => {
          return (
            <ul className="individual-comment-card" key={comment.comment_id}>
              <p> Date Posted: {dateFormat(comment.created_at)}</p>
              <h3>{comment.author}</h3>
              <p>{comment.body}</p>
              <p>Votes: {comment.votes}</p>
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentCard;
