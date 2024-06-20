import React, { useState, useEffect, useContext } from "react";
import { getComments } from "../api";
import { dateFormat } from "../utils";
import PostComment from "./post-comment";
import { deleteCommentFromApi } from "../api";
import {UserContext} from "../UserContext";

const CommentCard = ({ id }) => {
  const {user} = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getComments(id).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [id]);

  const handleDelete = (id) => {
    deleteCommentFromApi(id)
      .then(() => {
        setComments((currentComments) => currentComments.filter((comment) => comment.comment_id !== id));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Comments</h2>
      <PostComment setComments={setComments} comments={comments} id={id} />
      <ul className="comment-card">
        {comments.map((comment) => {
          return (
            <ul className="individual-comment-card" key={comment.comment_id}>
      <p> Date Posted: {dateFormat(comment.created_at)}</p>
      <h3>{comment.author}</h3>
      <p>{comment.body}</p>
      {user === comment.author && (
        <button onClick={() => handleDelete(comment.comment_id)}>Delete Comment</button>
      )}
    </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentCard;
