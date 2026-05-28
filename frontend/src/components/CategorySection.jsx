import { useNavigate } from "react-router-dom";
import "../styles/category.css";

function CategorySection({ cat, color }) {

  const navigate = useNavigate();

  return (
    <div
      className={`banner-card ${color}`}
      onClick={() => navigate(`/category/${cat._id}`)}
    >

      {/* LEFT CONTENT */}
      <div className="banner-content">

        <p className="banner-tag">
          Premium Collection
        </p>

        <h2>{cat.name}</h2>

        <button className="banner-btn">
          Explore Now →
        </button>

      </div>

      {/* RIGHT IMAGE */}
      <div className="banner-image">

        <img
          src={`https://ans-art-backend.onrender.com/${cat.image}`}
          alt={cat.name}
          loading="lazy"
        />

      </div>

    </div>
  );
}

export default CategorySection;