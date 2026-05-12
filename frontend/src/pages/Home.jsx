import { useEffect, useRef, useState } from "react";
import API from "../services/api";

import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";

import "../styles/category.css";

function Home() {

  const [categories, setCategories] = useState([]);

  const [activeIndex, setActiveIndex] = useState(0);

  const sliderRef = useRef(null);

  useEffect(() => {

    API.get("/category/main")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));

  }, []);

  const colors = [
    "wood-bg",
    "peach-bg",
    "grey-bg",
    "cream-bg",
    "aqua-bg",
    "blue-bg",
    "brown-bg"
  ];

  /* ACTIVE SLIDE DETECT */

  const handleScroll = () => {

    const slider = sliderRef.current;

    const scrollLeft = slider.scrollLeft;

    const cardWidth =
      slider.querySelector(".banner-card").offsetWidth + 25;

    const index = Math.round(scrollLeft / cardWidth);

    setActiveIndex(index);
  };

  return (
    <div>

      {/* HERO */}
      <Hero />

      {/* CATEGORY SECTION */}
      <section
        className={`banner-wrapper ${colors[activeIndex]}`}
      >

        <h2 className="section-title">
          Our Product Line
        </h2>

        {/* SLIDER */}
        <div
          className="banner-slider"
          ref={sliderRef}
          onScroll={handleScroll}
        >

          {categories.map((cat, index) => (

            <CategorySection
              key={cat._id}
              cat={cat}
              color={colors[index % colors.length]}
            />

          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;