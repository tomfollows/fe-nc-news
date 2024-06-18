import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./components/articles";
import Article from "./components/article";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />

        <Route path="/articles/:id" element={<Article />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
