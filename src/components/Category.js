import { useState } from "react";
const Category = (props) => {
  const [isActive, setIsActive] = useState("popular");
  const setActive = (val) => {
    setIsActive(val);
  };
  props.handleClickActive(isActive);
  return (
    <div className="Category-container">
      <div
        className={`Category-option ${isActive === "popular" ? "active" : ""}`}
        id="popular"
        onClick={(val) => {
          setActive(val.target.id);
        }}
      >
        Populer
      </div>
      <div
        className={`Category-option ${
          isActive === "top_rated" ? "active" : ""
        }`}
        id="top_rated"
        onClick={(val) => {
          setActive(val.target.id);
        }}
      >
        Top Rated
      </div>
      <div
        className={`Category-option ${isActive === "upcoming" ? "active" : ""}`}
        id="upcoming"
        onClick={(val) => {
          setActive(val.target.id);
        }}
      >
        Upcoming
      </div>
    </div>
  );
};

export default Category;
