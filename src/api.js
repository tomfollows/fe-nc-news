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
