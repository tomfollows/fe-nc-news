import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://be-nc-news-ftvm.onrender.com/api",
});

export const getArticles = (article_id) => {
  return newsAPI.get("/articles").then((res) => {
    return res.data;
  });
};
