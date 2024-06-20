import { useState } from "react";
import { postCommentToApi } from "../api";
import Card from "react-bootstrap/Card";

const PostComment = ({ id, setComments, comments }) => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [user, setUser] = useState("grumpy19");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    postCommentToApi(id, { author: "grumpy19", body: comment })
      .then((newCommentFromApi) => {
        setComment("");
        setSuccess("Comment posted successfully");
        setError(null);
        setComments([newCommentFromApi, ...comments]);
      })
      .catch((err) => {
        setError(`Comment failed to post: ${err.message}`);
        setSuccess(null);
      });
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Have your say...
        </Card.Subtitle>

        <form onSubmit={handleSubmit}>
          <label className="comment-form__label">
            Username:
            <input
              type="text"
              name="username"
              value={user}
              onChange={handleUserChange}
              required
              className="comment-form__input"
            />
          </label>
          <Card.Text>
            <label className="comment-form__label">
              Comment:
              <textarea
                name="body"
                value={comment}
                onChange={handleCommentChange}
                required
                className="comment-form__textarea"
              />
            </label>
          </Card.Text>
          <button
            type="submit"
            variant="primary"
            className="comment-form__button"
          >
            Post Comment
          </button>{" "}
          {success && <p>{success}</p>}
          {error && <p>{error}</p>}
        </form>
      </Card.Body>
    </Card>
  );
};

export default PostComment;
