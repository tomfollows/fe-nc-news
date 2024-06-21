import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://be-nc-news-ftvm.onrender.com/api",
});

export const getArticles = () => {
  return newsAPI.get("/articles").then((res) => res.data).catch(handleError);
};



export const getArticle = (article_id) => {
  return newsAPI.get(`/articles/${article_id}`).then((res) => res.data).catch(handleError);
};

export const getComments = (article_id) => {
  return newsAPI.get(`/articles/${article_id}/comments`).then((res) => res.data).catch(handleError);
};

export const patchArticleVotes = (article_id, newVotes) => {
  return newsAPI.patch(`/articles/${article_id}`, newVotes).then((res) => res.data.article).catch(handleError);
};

export const postCommentToApi = (article_id, body) => {
  return newsAPI.post(`/articles/${article_id}/comments`, body).then((res) => res.data.comment).catch(handleError);
};

export const deleteCommentFromApi = (article_id) => {
  return newsAPI.delete(`/comments/${article_id}`).then((res) => res.data).catch(handleError);
};

export const getArticlesByTopic = (topic) => {
  return newsAPI.get("/articles", { params: { topic } }).then((res) => res.data.articles).catch(handleError);
};

export const getTopics = () => {
  return newsAPI.get("/topics").then((res) => res.data.topics).catch(handleError);
};

export const getSortedArticles = (sort_by, order) => {
  return newsAPI.get("/articles", { params: { sort_by, order } }).then((res) => res.data.articles).catch(handleError);
};


const handleError = (error) => {
  console.error("API Error:", error);
  throw error;
};

