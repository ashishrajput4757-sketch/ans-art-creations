import { useEffect, useState } from "react";
import "../styles/hero.css";

const slides = [
  {
    image: "/hero/hero1.jpg",
    title: "ANS ART CREATIONS",
    subtitle: "Premium Corporate Essentials",
    desc: "Crafted products designed for modern businesses."
  },
  {
    image: "/hero/hero2.png",
    title: "ANS ART CREATIONS",
    title: "BRANDED MERCHANDISE",
    subtitle: "Custom Branding Solutions",
    desc: "Premium gifting & merchandise collections."
  },
  {
    image: "/hero/hero3.jpg",
    title: "ANS ART CREATIONS",
    title: "CORPORATE GIFTING",
    subtitle: "Luxury Business Gifts",
    desc: "Impress your clients with elegant gifting."
  }
];

function Hero() {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setIndex((prev) =>
        (prev + 1) % slides.length
      );

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="hero-v2">

      {/* BG IMAGE */}

<div
  className="hero-slider"
  style={{
    transform:
      `translateX(-${index * 100}vw)`
  }}
>

  {slides.map((slide, i) => (

    <img
      key={i}
      src={slide.image}
      alt=""
      className="hero-slide"
    />

  ))}

</div>

      {/* DARK OVERLAY */}
      <div className="hero-overlay"></div>

      {/* SIDE PREVIEW LEFT */}
      <div
        className="side-preview left"
        onClick={() =>
          setIndex(
            (index - 1 + slides.length) %
            slides.length
          )
        }
      >
        <img
          src={
            slides[
              (index - 1 + slides.length) %
              slides.length
            ].image
          }
          alt=""
        />

        <span>‹</span>
      </div>

      {/* SIDE PREVIEW RIGHT */}
      <div
        className="side-preview right"
        onClick={() =>
          setIndex(
            (index + 1) % slides.length
          )
        }
      >
        <img
          src={
            slides[
              (index + 1) % slides.length
            ].image
          }
          alt=""
        />

        <span>›</span>
      </div>

      {/* CENTER CONTENT */}
      <div className="hero-content">

        <h1 key={index}>
          {slides[index].title}
        </h1>

        <h2 key={"sub" + index}>
          {slides[index].subtitle}
        </h2>

        <p key={"desc" + index}>
          {slides[index].desc}
        </p>

      </div>

    </section>
  );
}

export default Hero;