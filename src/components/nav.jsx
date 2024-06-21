import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { getTopics } from "../api";

const Nav = () => {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getTopics()
      .then((response) => {
        setTopics(response);
      })
      .catch((error) => {
        console.error("Error:", error);
        setTopics([]);
      });
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      setSelectedTopic("");
    }
  }, [location]);

  const handleTopicChange = (event) => {
    const slug = event.target.value;
    if (slug===""){
      return
    }
    setSelectedTopic(slug);
    navigate(`/topics/${slug}`);
  };

  return (
    <nav className="Nav">
      <Link to="/"> Home </Link>
      <Link to="/articles"> View All Articles </Link>
      <select value={selectedTopic} onChange={handleTopicChange}>
        <option value="" disabled>Select a topic</option>
        {topics.map((topic) => (
          <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
        ))}
      </select>
    </nav>
  );
};

export default Nav;