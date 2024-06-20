import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://be-nc-news-ftvm.onrender.com/api",
});

export const getArticles = () => {
  return newsAPI.get("/articles").then((res) => {
    return res.data;
  });
};

export const getArticle = (article_id) => {
  return newsAPI.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
};

export const getComments = (article_id) => {
  return newsAPI.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
};

export const patchArticleVotes = (article_id, newVotes) => {
  return newsAPI.patch(`/articles/${article_id}`, newVotes).then((res) => {
    return res.data.article;
  });
};

export const postCommentToApi = (article_id, body) => {
  return newsAPI.post(`/articles/${article_id}/comments`, body).then((res) => {
    return res.data.comment;
  });
};

export const deleteCommentFromApi = (article_id) => {
  return newsAPI
    .delete(`/comments/${article_id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const getTopics = () => {
  return newsAPI.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getUsers = () => {
  return newsAPI.get("/users").then((res) => {
    return res.data.users;
  });
}