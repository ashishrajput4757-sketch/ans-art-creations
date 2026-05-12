import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { FaWhatsapp } from "react-icons/fa";
import Home from "./pages/Home";
import SubCategory from "./pages/SubCategory";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import PageLoader from "./components/PageLoader";

function App() {

  const location = useLocation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setLoading(true);

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2500);

    return () => clearTimeout(timer);

  }, [location.pathname]);

  return (

  <>

    {loading && <PageLoader />}

    <div
      style={{
        opacity: loading ? 0 : 1,
        transition: "opacity 0.7s ease"
      }}
    >

      <Layout>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/category/:id"
            element={<SubCategory />}
          />

          <Route
            path="/products"
            element={<ProductList />}
          />

          <Route
            path="/about"
            element={<About />}
          />

        </Routes>

        {/* WHATSAPP BUTTON */}

       <a
  href="https://wa.me/919318330081"
  target="_blank"
  rel="noreferrer"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    color: "#fff",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    textDecoration: "none",
    fontSize: "40px",
    zIndex: 999,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    boxShadow: "0 8px 25px rgba(37,211,102,0.4)"
  }}
>

  <FaWhatsapp />

</a>

      </Layout>

    </div>

  </>
);
}

export default App;