import React from "react";

const SortBy = () => {
  return (
    <div className="sort-by">
      <p>Sort by:</p>
      <div>
        <label className="sort-label">Trending</label>
      </div>
      <div>
        <label className="sort-label">Top Rated</label>
      </div>
      <div>
        <label className="sort-label">Date</label>
      </div>
    </div>
  );
};

export default SortBy;
