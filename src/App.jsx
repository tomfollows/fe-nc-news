import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./components/articles";
import Article from "./components/article";
import Header from "./components/header";
import Footer from "./components/footer";
import { UserContext } from "./UserContext";
import TopicArticles from "./components/topics-articles";

function App() {
  const [user, setUser] = useState("grumpy19");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path="/topics/:topic" element={<TopicArticles />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
